import Head from 'next/head';

export const siteTitle = 'Create a Portfolio';

const CreateAPortfolio = () => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>{siteTitle}</h1>
      <p>
        Over the past few weeks, you&apos;ve learned all about HTML, CSS, and JavaScript, created some cool projects, and learned some other useful business and soft skills. Now it&apos;s time to put all of that together and create a portfolio that you can be proud of.
      </p>
      <h2>
        It&apos;s getting serious 🤭
      </h2>
      <p>
        Now it&apos;s time to take your code to the next level. In the following weeks, you&apos;ll learn more about GitHub and git version control, how to use VS Code as a code editor in a more advanced way, and create larger projects using the ReactJS library while keeping accessibility in mind.
      </p>
      <p>
        <b>Note:</b> If you have a GitHub student account, I recommend you to use it to get access to the <a href="https://education.github.com/pack">GitHub Student Developer Pack</a>. It&apos;s a great way to get access to a lot of useful tools and services for free, e.g. full access to FrontendMasters, Jetbrains Academy, Microsoft Azure and much more.
      </p>
      <h2>Create a portfolio as a frontend web developer</h2>
      <h2>Create a portfolio as a UX Designer</h2>
      <h2>Create a portfolio as a QA tester</h2>
    </>
  )
}

export default CreateAPortfolio;