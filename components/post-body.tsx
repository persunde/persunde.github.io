import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight';
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

interface  HighlightCodeProps {
	value: any;
}

const  HighlightCode: NextPage<HighlightCodeProps> = ({ value }) => {
	return (
		<div>
			<Highlight>
				{value}
			</Highlight>
		</div>
	)
}

interface  OrderedListBlockProps {
  ordered: boolean, 
  children: any,
}

const OrderedListBlock: NextPage<OrderedListBlockProps> = ({ordered, children}: OrderedListBlockProps) => {
  let i = 0;
  const list = children.map(val => {
    i += 1;
    const key = i;
    return <li key={key}>{val.props.children[0].props.children}</li>
  })

  if (ordered) {
    return <ol className="markdown-ol">{list}</ol>
  } else {
    return <ul className="markdown-ul">{list}</ul>
  }
}