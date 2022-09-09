import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {collection, getDocs, query, where, orderBy, limit, startAfter, QuerySnapshot} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import { async } from '@firebase/util'
import ListingItem from '../components/ListingItem'

function Category() {
    const [listings, setListings] = useState(null)
    const [loading, setLoading] = useState(false)

    const params = useParams()

    useEffect(() => {
        const fetchListings = async() => {
            try {
                setLoading(true)
                const listingsRef = collection(db, 'listing')

                const q = query(
                        listingsRef,
                        where('type', '==', params.categoryName),
                        orderBy('timestamp', 'desc'),
                        limit(10)
                )

                const querySnap = await getDocs(q)

                let listings = []

                querySnap.forEach((doc) => {
                    console.log(doc.data())
                    return listings.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })

                setListings(listings)
                setLoading(false)
            } catch(error) {
                toast.error("Could not fetch listings.")
            }
        }

        fetchListings()
    }, [])
  return (
    <div className='category'>
        <header>
            <p className="pageHeader">
                {params.categoryName === 'rent' ? 'Places for rent' : 'Places for sale'}
            </p>
        </header>

        {loading ? "Loading" : listings && listings.length > 0 ? 
        <>
        <main>
            <ul className="categoryListings">
                {listings.map((listing) => (
                    <ListingItem listing={listing.data} id={listing.id} key={listing.id}/>
                ))}
            </ul>
        </main>
        </>
        : "No Listings"}
    </div>
  )
}

export default Category
