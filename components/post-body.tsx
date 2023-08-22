import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vscDarkPlus from "../styles/vsc-dark-plus";
import { NextPage } from 'next';


export default function PostBody({ content }) {
  return (
    <div className="markdown-body max-w-5xl ">
      <ReactMarkdown children={content}
        // renderers={{
        //   code: HighlightCode,
        //   list: OrderedListBlock,
        // }}

        components={{
          // li(val) {
          //   return OrderedListBlock(val)
          // },
          // ol(val) {
          //   return OrderedListBlock(val)
          // },
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                PreTag="div"
                style={vscDarkPlus}
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          }
        }}
      />
    </div>
  )
}

const HighlightCode = ({ language, value }) => {
  return (
    <SyntaxHighlighter 
      language={language} 
      style={vscDarkPlus}
    >
      {value}
    </SyntaxHighlighter>
  );
};

interface  OrderedListBlockProps {
  ordered: boolean, 
  children: any,
}

const OrderedListBlock = ({ordered, children}: OrderedListBlockProps) => {
  let i = 0;
  const list = children.map(val => {
    i += 1;
    return val
  })

  if (ordered) {
    return <ol className="markdown-ol">{list}</ol>
  } else {
    return <ul className="markdown-ul">{list}</ul>
  }
}