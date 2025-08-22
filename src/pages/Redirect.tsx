import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

const REDIRECTS: Record<string, string> = {
    devto: "https://dev.to/lokesh_keswani",
    medium: "https://medium.com/@LokeshKeswani",
    github: "https://github.com/Lokesh-Keswani",
    linkedin: "https://www.linkedin.com/in/lokesh-keswani-13325a351/",

    // blog posts
    'blog-ai-stole-my-job': "https://medium.com/@LokeshKeswani/ai-stole-my-job-so-i-made-it-my-intern-dc153b254902",
    'blog-flexbox': "https://dev.to/lokesh_keswani/css-flexbox-explained-a-complete-reference-and-tutorial-2n6",
    'blog-chatbots': "https://dev.to/lokesh_keswani/how-small-ai-chatbots-work-in-5-surprising-steps-explained-without-code-4og7",
    'blog-promises': "https://dev.to/lokesh_keswani/javascript-promises-explained-a-complete-guide-for-beginners-gbe",
    'blog-python-tasks': "https://dev.to/lokesh_keswani/top-51-python-tasks-every-beginner-should-solve-2b1",

    // projects / demos
    admybrand: "https://admybrand-dash-nova-jfwg.vercel.app/",
    synapse: "https://synapse-lac.vercel.app/",
    todolist: "https://lokesh-keswani.github.io/Todo/",
    eresources: "https://lokesh-keswani.github.io/E-Resources/",
};

export default function RedirectPage() {
    const { key } = useParams<{ key: string }>();
    const target = key ? REDIRECTS[key] : undefined;

    useEffect(() => {
        if (target) {
            // use replace so history doesn't keep the transient route
            window.location.replace(target);
        }
    }, [target]);

    if (!target) return <Navigate to="/" replace />;

    return <div className="container mx-auto px-4 py-8 text-center">Redirecting…</div>;
}
