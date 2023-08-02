import React, { useEffect, useState } from 'react'
import request from '@/utils/request'
import { useRouter } from 'next/router'


function Page({list}: any) {
  const [state, setState] = useState(list)
  const router = useRouter()

  useEffect(() => {
    setState(list)
  }, [list])

  useEffect(() => {

  }, [])

  return (
    <div>
      <button onClick={() => {
        let i = Math.floor(Math.random() * 10)
        console.log(i);
        router.push({
          pathname: '/list/page',
          query: {
            i: i
          }
        })
      }}>change router</button>
      <ul>
        {
          state.map((item, i) => <li key={i}>{item}</li>)
        }
      </ul>
      <div id='loading'>加载中</div>
    </div>
  )
}

export default Page

export const getServerSideProps = async (ctx) => {
  // console.log(ctx);
  
  const res = await request('/list', {
    test: ctx.query.i || 1
  })
  
  return {
    props: {
      list: res.list
    }
  }
}