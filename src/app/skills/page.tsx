import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Heading from "../Component/Heading/Heading";

const reviews = [
    {
      name: "HTML",
      category: "Frontend",
      body: "HTML is the fundamental markup language used to create the structure and content of web pages.",
      img: "https://i.ibb.co.com/QQRzdqz/html.png",
    },
    {
      name: "CSS",
      category: "Frontend",
      body: "CSS is used to style and customize the layout of web pages, making them visually appealing.",
      img: "https://i.ibb.co.com/9Zyf84L/css.png",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      body: "JavaScript is a dynamic programming language used to add interactive features like form validation and animations to websites.",
      img: "https://i.ibb.co.com/YdHLhrT/js.png",
    },
    {
      name: "React.js",
      category: "Frontend",
      body: "React.js is a JavaScript library used to create real-time interactive interfaces.",
      img: "https://i.ibb.co.com/JpmkjTM/react.png",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      body: "Tailwind CSS is a utility-first CSS framework that helps in creating fast and customized designs.",
      img: "https://i.ibb.co.com/2Mtf835/tailwinds.jpg",
    },
    {
      name: " GitHub",
      category: "Frontend",
      body: " GitHub are essential tools for code management and version control.",
      img: "https://i.ibb.co.com/2nXzmBF/github.png",
    },
    {
      name: "Node.js",
      category: "Backend",
      body: "Node.js is a runtime environment for executing JavaScript on the server side, enabling backend development with JavaScript.",
      img: "https://i.ibb.co.com/QrXP47C/node.png",
    },
    {
      name: "Express.js",
      category: "Backend",
      body: "Express.js is a minimal and flexible Node.js web application framework, providing a robust set of features for building web applications.",
      img: "https://i.ibb.co.com/DgQmyJ0/express.png",
    },
    {
      name: "MongoDB",
      category: "Backend",
      body: "MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability, ideal for handling large volumes of data.",
      img: "https://i.ibb.co.com/LzhYChM/mongodb.jpg",
    },
    {
      name: "TypeScript",
      category: "Other",
      body: "TypeScript is a superset of JavaScript that adds static types, making code more predictable and easier to maintain.",
      img: "https://i.ibb.co.com/t2QhmT4/type.png",
    },
    {
      name: "Next.js",
      category: "Other",
      body: "Next.js is a React framework that enables server-side rendering and static site generation for faster and optimized web applications.",
      img: "https://i.ibb.co.com/9WJ94MV/next.png",
    },
    {
      name: "Firebase",
      category: "Other",
      body: "Firebase is a platform developed by Google for building and managing mobile and web applications, providing tools like real-time databases and authentication.",
      img: "https://i.ibb.co.com/X39w4yY/firebase.png",
    },
    {
      name: "Mamba UI",
      category: "Other",
      body: "Mamba UI is a modern and flexible UI library for building visually appealing web applications with ease.",
      img: "https://avatar.vercel.sh/mambaui",
    },
    {
      name: "Magic UI",
      category: "Other",
      body: "Magic UI is a utility-first CSS framework designed to enhance the visual design of web applications with minimal effort.",
      img: "https://avatar.vercel.sh/magicui",
    },
    {
      name: "Figma",
      category: "Other",
      body: "Figma is a collaborative design tool that allows teams to design, prototype, and gather feedback all in one platform.",
      img: "https://i.ibb.co.com/M6F0Yqt/figma.png",
    },
  ];
  

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <div>
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="50"
            height="50"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{name}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    </div>
  );
};

export default function MarqueeDemo() {
  // ডিফল্ট এক্সপোর্ট যুক্ত করা হলো
  return (
    <div className="relative flex h-[500px] w-full flex-col mt-20 p-1 overflow-hidden    md:shadow-xl">
      <div className="text-start ">
        <Heading title="My Skills"></Heading>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard username={""} key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard username={""} key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
