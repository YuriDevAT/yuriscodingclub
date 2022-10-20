import Head from 'next/head';

export const siteTitle = 'Get a job';

const GetAJob = () => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>{siteTitle}</h1>
      <p>
        You&apos;ve finally made it 🥳!
      </p>
      <p>
        You&apos;ve created a portfolio, feel confident talking about code and your projects, and are ready to start your job search. But the hustle is not over yet. There&apos;s still so much to think about.
      </p>
      <p>
        You should now work on your (online) presentation (you don&apos;t need social media if you do not want that), create a promising CV, and put the final touch on your projects.
      </p>
      <p>
        After every chat, every meeting, and every job interview I had, I&apos;ve found that there is still so much to do that I didn&apos;t think about before I started my job search. So this is not the time to get lazy at all.
      </p>
      <p>
        I made a list of all the important things to think about before presenting yourself and your code to the world.
      </p>

      <h2>What you need when you start your job search</h2>
      <p>
        Let&apos;s split my suggestions into two parts: the personal performance and the final touch for your projects.
      </p>
      <h3>Personal performance</h3>
      <p>
        I&apos;ve written a few articles on personal performance that you should definitely check out. These tips have helped other people get interviews as well that no recruiter had noticed before.
      </p>
      <section className="articles">
        <article className="article">
          <a href="https://dev.to/yuridevat/how-to-write-a-promising-cv-32ih">
            <h4>How to write a promising&nbsp;CV</h4>
            <p>
              Read how to create an awesome github profile and make an outstanding portfolio like many others.
            </p>
          </a>
        </article>
        <article className="article">
          <a href="https://dev.to/yuridevat/how-to-create-a-stunning-github-profile-2mh5">
            <h4>How to create a stunning GitHub&nbsp;profile</h4>
            <p>
              Read how to create an awesome github profile and make an outstanding portfolio like many others.
            </p>
          </a>
        </article>
        <article className="article">
          <a href="https://dev.to/yuridevat/how-to-create-a-professional-linkedin-profile-2n11">
            <h4>How to create an professional LinkedIn&nbsp;Profile</h4>
            <p>
              Read how to create an awesome github profile and make an outstanding portfolio like many others.
            </p>
          </a>
        </article>
      </section>

      <p>
        Take a look at <a href="https://github.com/YuriDevAT">my GitHub profile</a> as well to get an idea of what I&apos; m talking about.I didn&apos;t even had a portfolio but used my GitHub profile to show off my projects.
      </p>
      <h3>Update your projects</h3>
      <p>
        I know you&apos;re thinking right now that you&apos;re happy with your projects, that you&apos;ve put so much effort into them, and that they&apos;re ready to be displayed.
      </p>
      <p>
        But there are still a few things you may not have thought of, and I want to help you remember to double check everything before you present it.
      </p>
      <p>
        So here&apos;s a checklist, that you can work through for each of your projects and check that you&apos;ve considered these things at all. Of course, no project has to be perfect and no project will ever be finished. But it&apos;s still a great feeling to know that you gave it your all to get the most out of each project. If you follow these simple steps, you&apos;ll have a lot more to talk about in job interviews.
      </p>
      <a className="linked-tag" href="https://github.com/YuriDevAT/job-seekers/wiki/Checklist-for-your-portfolio-projects">Grab the checklist</a>
      <h3>Interview preparation</h3>
      <p>
        It would be a good practice to keep all the information about the applied jobs in one file. That&apos;s where <a href="https://instinctive-cycle-28f.notion.site/Job-Applications-Template-3ecf0503f6a2401da865b29f72da58a7">Notion&apos;s Job Applications Template</a> comes in handy. You can add the companies you applied to and the job description to be up to date when the final call comes (each job description is different, so preparing for it is sometimes very different).
      </p>
      <p>
        To help you prepare, I&apos;ve put together a collection of interview questions I&apos;ve been asked often that you might want to know. There are so many collections of interview questions, so I personally focused my interview preparation only on the personal questions and acquired the necessary knowledge to be able to talk about my projects, which seemed enough. (Otherwise I would have gone crazy 🤪)
      </p>
      <p>
        Hopefully it is self-explanatory that you have stable internet during the interview, have code ready to show (GitHub, live view, and VSC), are in a quiet environment with appropriate background and clothing.
      </p>
      <a className="linked-tag" href="https://github.com/YuriDevAT/job-seekers/wiki/Interview-Questions">Interview questions</a>
    </>
  )
}

export default GetAJob;