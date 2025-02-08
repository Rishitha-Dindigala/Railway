import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/T1.png"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='' title='The Train Diaries' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog
