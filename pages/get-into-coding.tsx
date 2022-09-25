import Head from 'next/head';

export const siteTitle = 'Get Into Coding';

const GetIntoCoding = () => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>{siteTitle}</h1>
      Starting the right way could have been so easy.

      <h2>Hello CodeNewbie, nice to meet you 👋</h2>
      <p>
        It was just a little over a year ago that I was in the same situation as you are now. I wanted to start programming, but I did not know where to begin. 🤷‍♀️ That is why I started this website, to save you a lot of time trying to find the best place to start, and to give you the opportunity to start the way I would have liked to a year ago.
      </p>
      <h2>FrontendMasters Free Coding Bootcamp</h2>
      <p>I highly recommend starting your developer journey with Frontend Masters. I wish I had known about this awesome bootcamp when I first started to code.</p>
      <h3>Advantages of this bootcamp</h3>
      <ul>
        <li>It is free</li>
        <li>You will learn coding with the best instructors out there (my personal opinion)</li>
        <li>You will learn all three languages that build websites - HTML, CSS and JavaScript</li>
        <li>You will learn how to use Git and GitHub and how to host your portfolio</li>
      </ul>
      <p>
        Starting your journey is just a <a href="https://frontendmasters.com/bootcamp/">click away</a>. You can do it. 💪
      </p>
      <a href="https://frontendmasters.com/bootcamp/">Go to FrontendMasters Website</a>
    </>
  )
}

export default GetIntoCoding;