import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  a: ({ href, children }) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className="font-medium text-emalya-blue underline underline-offset-2 hover:no-underline">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-emalya-blue underline underline-offset-2 hover:no-underline"
      >
        {children}
      </a>
    );
  },
};

type BlogMarkdownProps = {
  content: string;
};

export function BlogMarkdown({ content }: BlogMarkdownProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-emalya-blue prose-p:text-emalya-gray prose-li:text-emalya-gray prose-strong:text-emalya-blue prose-table:text-sm md:prose-table:text-base prose-th:bg-emalya-cream/80 prose-th:text-emalya-blue prose-td:border-emalya-cream prose-img:rounded-xl">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
