import React from 'react'

const Hero = () => {
  return (
    <div>
        <div class="hero min-h-full bg-base-200 mx-16 mb-12 rounded-xl">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img src="https://th.bing.com/th/id/OIP.UmWSXseYC8zUioUB9OhOaQHaDQ?w=272&h=153&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold pb-8 text-violet-500">Blogging-Application</h1>
       Here you can read the multiple post of different categorires <p class="py-6"></p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>



    </div>
  )
}

export default Hero