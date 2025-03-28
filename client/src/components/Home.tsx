import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import CodeBlock from "@/components/code-block";
import FeatureCard from "@/components/feature-card";
import FolderStructure from "@/components/folder-structure";
import storm from '/lightning-svgrepo-com (2).svg'
export default function Home() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className=" min-h-screen w-full bg-gradient-to-b from-black to-violet-950">
            <div className="mx-auto px-6  lg:px-20 py-12">
                {/* Hero Section */}
                <header className="flex flex-col items-center justify-center text-center py-16 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="size-12 bg-gradient-to-br  rounded-lg flex items-center justify-center">
                            <img src={storm} alt="Flash Logo" className="" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                            Flash
                        </h1>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                        The Ultimate Project Scaffolding Tool
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl">
                        Create a full-fledged frontend or backend setup with just one command!
                    </p>

                    <div className="mt-8 w-full max-w-2xl">
                        <CodeBlock code="npx flash_create <project_name>" />
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center mt-8">
                        <Button
                            onClick={() => scrollToSection("get-started")}
                            size="lg"
                            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                        >
                            Get Started
                        </Button>
                        <a
                                href="https://github.com/Nagraj-13/Flash_Templates"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                        <Button size="lg" variant="outline" className="gap-2" >
                        
                            <Github className="size-4" />
                            GitHub
                        </Button>
                        </a>
                    </div>
                </header>

                {/* What is Flash Section */}
                <section className="py-16 ">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="mb-4 bg-orange-500/20 text-orange-400 hover:bg-orange-500/20">
                                About Flash
                            </Badge>
                            <h2 className="text-3xl font-bold text-white mb-6">
                                ⚡ What is Flash?
                            </h2>
                            <p className="text-gray-300 mb-6">
                                <strong>Flash</strong> is a powerful project scaffolding tool like
                                Vite, designed to help developers quickly set up modern{" "}
                                <strong>React</strong> applications and backend servers. Whether
                                you're building a <strong>frontend, backend, or both</strong>, Flash
                                takes care of the initial setup, so you can focus on coding!
                            </p>

                            <h3 className="text-2xl font-bold text-white mb-4">
                                🔥 Why Choose Flash?
                            </h3>
                            <ul className="relative border-l-2 border-violet-500 pl-6 space-y-4 text-gray-300">
                                <li className="relative">
                                   
                                    <span className="block font-bold text-white">
                                        Instant Setup
                                    </span>
                                    <span className="text-gray-400">
                                        Just one command to get a complete project structure.
                                    </span>
                                </li>
                                <li className="relative">
                                   
                                    <span className="block font-bold text-white">
                                        Preconfigured Stack
                                    </span>
                                    <span className="text-gray-400">
                                        Comes with Redux, React Router, Tailwind CSS, and ShadCN UI.
                                    </span>
                                </li>
                                <li className="relative">
                                   
                                    <span className="block font-bold text-white">
                                        JS & TS Support
                                    </span>
                                    <span className="text-gray-400">
                                        Choose between JavaScript and TypeScript templates.
                                    </span>
                                </li>
                                <li className="relative">
                                
                                    <span className="block font-bold text-white">
                                        Linting & Formatting
                                    </span>
                                    <span className="text-gray-400">
                                        Integrated with ESLint and Prettier for clean code.
                                    </span>
                                </li>
                                <li className="relative">
                                    
                                    <span className="block font-bold text-white">
                                        Backend Ready
                                    </span>
                                    <span className="text-gray-400">
                                        Includes a structured Node.js backend with MongoDB and
                                        logging support.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <FeatureCard
                                icon="🌐"
                                title="Frontend Ready"
                                description="React, Redux, Router, and more"
                                className="bg-blue-500/20"
                            />
                            <FeatureCard
                                icon="⚙️"
                                title="Backend Ready"
                                description="Node.js, Express, MongoDB"
                                className="bg-green-500/20"
                            />
                            <FeatureCard
                                icon="🎨"
                                title="Styling"
                                description="Tailwind CSS & ShadCN UI"
                                className="bg-purple-500/20"
                            />
                            <FeatureCard
                                icon="⚡"
                                title="Fast Setup"
                                description="One command, ready to go"
                                className="bg-yellow-500/20"
                            />
                        </div>
                    </div>
                </section>

                {/* Templates Section */}
                <section className="py-16">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-blue-500/20 text-blue-400 hover:bg-blue-500/20">
                            Templates
                        </Badge>
                        <h2 className="text-3xl font-bold text-white">📦 Templates Available</h2>
                    </div>

                    <Tabs defaultValue="frontend" className="w-full">
                        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-slate-600 text-white ">
                            <TabsTrigger value="frontend" className="text-white">
                                🌐 Frontend
                            </TabsTrigger>
                            <TabsTrigger value="backend" className="text-white">
                                ⚙️ Backend
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="frontend" className="space-y-8">
                            <Card className="bg-slate-900/60 border-slate-800">
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        JavaScript & TypeScript
                                    </h3>
                                    <ul className="space-y-2 text-gray-300 mb-6">
                                        <li>
                                            • Fully configured <strong>React</strong> project.
                                        </li>
                                        <li>
                                            • Supports <strong>Redux</strong> for state management.
                                        </li>
                                        <li>
                                            • <strong>Tailwind CSS</strong> for styling.
                                        </li>
                                        <li>
                                            • <strong>ShadCN UI</strong> for beautiful UI
                                            components.
                                        </li>
                                        <li>
                                            • Configured with <strong>ESLint and Prettier</strong>.
                                        </li>
                                    </ul>

                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-blue-400 mb-2">
                                                🔹 To create a JavaScript project:
                                            </p>
                                            <CodeBlock code="npx flash_create my-app --js" />
                                        </div>

                                        <div>
                                            <p className="text-blue-400 mb-2">
                                                🔹 To create a TypeScript project:
                                            </p>
                                            <CodeBlock code="npx flash_create my-app --ts" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="backend" className="space-y-8">
                            <Card className="bg-slate-900/60 border-slate-800">
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        Node.js + Express
                                    </h3>
                                    <ul className="space-y-2 text-gray-300 mb-6">
                                        <li>
                                            • <strong>Node.js + Express</strong> setup.
                                        </li>
                                        <li>
                                            • <strong>MongoDB database connection</strong>{" "}
                                            preconfigured.
                                        </li>
                                        <li>
                                            • <strong>Logger support</strong> for debugging.
                                        </li>
                                        <li>
                                            • Follows a structured <strong>MVC pattern</strong>.
                                        </li>
                                    </ul>

                                    <div>
                                        <p className="text-blue-400 mb-2">
                                            🔹 To create a backend project:
                                        </p>
                                        <CodeBlock code="npx flash_create my-app --backend" />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </section>

                {/* Folder Structure Section */}
                <section className="py-16">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-purple-500/20 text-purple-400 hover:bg-purple-500/20">
                            Structure
                        </Badge>
                        <h2 className="text-3xl font-bold text-white">🏗 Folder Structure</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <FolderStructure
                            title="Frontend (JS & TS Templates)"
                            structure={`my-app/
├── src/
│   ├── components/
│   ├── store/
│   ├── utils/
│   ├── main.tsx (TS) / main.jsx (JS)
│   ├── App.tsx (TS) / App.jsx (JS)
│   ├── index.css
│   └── assets/
├── public/
├── package.json
├── vite.config.ts (TS) / vite.config.js (JS)
└── README.md`}
                        />

                        <FolderStructure
                            title="Backend Template"
                            structure={`server/
├── src/
│   ├── app/
│   ├── config/
│   ├── constants/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
├── .env.example
├── package.json
├── index.js
└── README.md`}
                        />
                    </div>
                </section>

                {/* Get Started Section */}
                <section id='get-started' className="py-16">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-green-500/20 text-green-400 hover:bg-green-500/20">
                            Quick Start
                        </Badge>
                        <h2 className="text-3xl font-bold text-white">🚀 Get Started</h2>
                    </div>

                    <div className="max-w-2xl mx-auto space-y-6">
                        <div>
                            <p className="text-white mb-2">
                                1️⃣ <strong>Create a new project</strong>
                            </p>
                            <CodeBlock code="npx flash_create my-app" />
                        </div>

                        <div>
                            <p className="text-white mb-2">
                                2️⃣ <strong>Move into the project folder</strong>
                            </p>
                            <CodeBlock code="cd my-app" />
                        </div>

                        <div>
                            <p className="text-white mb-2">
                                3️⃣ <strong>Run the development server</strong>
                            </p>
                            <CodeBlock code="npm run dev" />
                        </div>

                        <p className="text-center text-lg text-white mt-8">
                            🎉 That's it! Start building your next project with{" "}
                            <strong>Flash</strong> in seconds.
                        </p>
                    </div>
                </section>

                {/* Contribute Section */}
                <section className="py-16 w-full px-4">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-red-500/20 text-red-400 hover:bg-red-500/20">
                            Open Source
                        </Badge>
                        <h2 className="text-3xl font-bold text-white">💡 Want to Contribute?</h2>
                        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                            Flash is open-source, and we welcome contributions from the community!
                            Help us make Flash even better by contributing code, documentation, or
                            ideas.
                        </p>
                    </div>

                    {/* Grid Section (Stacks on Small Screens) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Getting Started Card */}
                        <Card className="bg-slate-900/60 border-slate-800">
                            <CardContent className="pt-6 w-full">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-orange-400">1.</span> Getting Started
                                </h3>
                                <ol className="space-y-3 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 font-bold">•</span>
                                        <span>
                                            <strong>Fork the repository</strong> on GitHub
                                        </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 font-bold">•</span>
                                        <span>
                                            <strong>Clone your fork</strong> to your local machine
                                        </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 font-bold">•</span>
                                        <span>
                                            <strong>Install dependencies</strong> with{" "}
                                            <code className="bg-black/30 px-1 rounded">
                                                npm install
                                            </code>
                                        </span>
                                    </li>
                                </ol>

                                {/* Code Block with Overflow Fix */}
                                <div className="mt-4 overflow-x-auto w-full">
                                    <CodeBlock
                                        code={`git clone https://github.com/Nagraj-13/Flash_Templates.git
cd Flash_Templates
npm install
git checkout -b feature/your-amazing-feature`}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Making Contributions Card */}
                        <Card className="bg-slate-900/60 border-slate-800">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-orange-400">2.</span> Making Contributions
                                </h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 font-bold">•</span>
                                        <span>
                                            <strong>Make changes</strong> and test them
                                        </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 font-bold">•</span>
                                        <span>
                                            <strong>Commit your changes</strong> with clear messages
                                        </span>
                                    </li>
                                </ul>

                                {/* Code Block with Overflow Fix */}
                                <div className="mt-4 overflow-x-auto w-full">
                                    <CodeBlock
                                        code={`git add .
git commit -m "Add awesome new feature"
git push origin feature/your-amazing-feature`}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contribution Types Section */}
                    <div className="mt-8 max-w-4xl mx-auto">
                        <Card className="bg-slate-900/60 border-slate-800">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold text-white mb-4">
                                    Types of Contributions Welcome
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Code Contributions */}
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-orange-400">
                                            Code Contributions
                                        </h4>
                                        <ul className="text-gray-300 space-y-1">
                                            <li>• New templates and features</li>
                                            <li>• Bug fixes and optimizations</li>
                                            <li>• Performance improvements</li>
                                            <li>• Test coverage improvements</li>
                                        </ul>
                                    </div>
                                    {/* Non-Code Contributions */}
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-orange-400">
                                            Non-Code Contributions
                                        </h4>
                                        <ul className="text-gray-300 space-y-1">
                                            <li>• Documentation improvements</li>
                                            <li>• Design enhancements</li>
                                            <li>• Helping answer community questions</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Contribution Guidelines */}
                                <div className="mt-6 space-y-2">
                                    <h4 className="font-semibold text-orange-400">
                                        Contribution Guidelines
                                    </h4>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Follow the code style of the project</li>
                                        <li>• Write or update tests for your changes</li>
                                        <li>• Update documentation for new features</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* GitHub Button */}
                    <div className="flex justify-center mt-8">
                        <Button size="lg" className="gap-2">
                            <Github className="size-4" />
                            <a
                                href="https://github.com/Nagraj-13/Flash_Templates"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </a>
                        </Button>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="border-t  border-gray-800 py-8">
                <div className="container mx-auto px-4 text-center text-gray-400">
                  
                </div>
            </footer>
        </div>
    );
}
