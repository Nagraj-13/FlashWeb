import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  className?: string;
}

export default function CodeBlock({ code, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const modifyCode = (code: string) => {
    let modifiedCode = code;

    // Replace `<project_name>` with `myApp`
    modifiedCode = modifiedCode.replace(/<project_name>/g, "my-app");

    // Replace `my-app` in `npx flash create my-app --backend` with `server`
    if (/npx flash create my-app --backend/.test(modifiedCode)) {
      modifiedCode = modifiedCode.replace(/my-app/g, "server");
    }

    return modifiedCode;
  };

  const copyToClipboard = async () => {
    const processedCode = modifyCode(code);
    await navigator.clipboard.writeText(processedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative rounded-lg overflow-hidden w-full", className)}>
      <div className="bg-black border border-gray-800 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto max-w-full">
        <pre className="whitespace-pre-wrap break-words">{code}</pre>
      </div>
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 p-1.5 rounded-md bg-gray-800/80 text-gray-400 hover:bg-gray-700 hover:text-gray-300 transition-colors"
        aria-label="Copy code"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
    </div>
  );
}
