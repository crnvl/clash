import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {

	console.log('Hello World Site');

	const [text, setText] = useState('UwU')

	const changeText = () => {
		setText('OwO')
	}

  return <>
	<div className='flex items-center flex-col w-screen h-screen'>
		<h1 className='font-bold'>Hello World</h1>
		<button className='border-2 border-black rounded px-8 py-2 hover:scale-110 transition ease-in-out 300ms active:scale-105' onClick={changeText}>{text}</button>
	</div>
  </>
}
