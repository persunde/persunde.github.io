import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vscDarkPlus from "../styles/vsc-dark-plus";
import { NextPage } from 'next';


export default function PostBody({ content }) {
  return (
    <div className="markdown-body max-w-5xl ">
      <ReactMarkdown source={content}
        renderers={{
          code: HighlightCode,
          list: OrderedListBlock,
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

const OrderedListBlock: NextPage<OrderedListBlockProps> = ({ordered, children}: OrderedListBlockProps) => {
  let i = 0;
  const list = children.map(val => {
    i += 1;
    return <li key={i}>{val}</li>
  })

  if (ordered) {
    return <ol className="markdown-ol">{list}</ol>
  } else {
    return <ul className="markdown-ul">{list}</ul>
  }
}