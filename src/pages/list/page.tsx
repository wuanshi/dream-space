import React, { useEffect, useRef, useState } from 'react'
import { post, cpost } from '@/utils/request'
import { useRouter } from 'next/router'


function Page({list}: any) {
  const [state, setState] = useState(list)
  const router = useRouter()
  const ref = useRef<any>()
  useEffect(() => {
    setState(list)
  }, [list])

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        console.log('下拉加载');
        cpost('/api/list', {
          test: Math.random()
        }).then(res => {
          console.log(res);
        })
      }
    }, {
      threshold: 0.1,
      // root: document.getElementById('root')
    })
    observer.observe(ref.current as Element)
    return () => {
      observer.disconnect()
    }
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
          state.map((item: string, i: number) => <li key={i}>{item}</li>)
        }
      </ul>
      <div id='loading' ref={ref}>加载中</div>
    </div>
  )
}

export default Page

export const getServerSideProps = async (ctx) => {
  // console.log(ctx);
  
  const res = await post('/list', {
    test: ctx.query.i || 1
  })
  
  return {
    props: {
      list: res.list
    }
  }
}