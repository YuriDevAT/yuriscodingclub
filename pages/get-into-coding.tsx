import Head from 'next/head';

export const siteTitle = 'Get Into Coding';

const GetIntoCoding = () => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>{siteTitle}</h1>
      <p>Starting the right way could have been so easy.</p>

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
        Starting your journey is just a <a href="https://frontendmasters.com/bootcamp/" aria-label="Go to Frontend Masters Bootcamp Website">click away</a>. You can do it. 💪
      </p>
      <a href="https://frontendmasters.com/bootcamp/">Go to Frontend Masters Bootcamp Website</a>
      <h2>Interested in how I got into coding? Read my story here.</h2>
      <p>I walked myself through every tutorial about <a href="https://www.w3schools.com/html/default.asp">HTML</a>, <a href="https://www.w3schools.com/css/default.asp">CSS</a>, and <a href="https://www.w3schools.com/js/default.asp">JavaScript</a> on <a href="https://www.w3schools.com/">w3schools</a>.</p>
      <p>Don&apos; t get me wrong. I learned a lot by doing so. And the site even improved a lot since back then in 2020. But it would also have been good to have someone to explain things verbally as well to understand it better. Not everyone needs verbal explanations, of course, but for me it would have been better.
      </p>
      <p>I <b>highly recommend</b> that after completing the FrontendMasters BootCamp, you go through all the tutorials on w3schools because repetition is the key to remembering (all) what you have learned.</p>

    </>
  )
}

export default GetIntoCoding;