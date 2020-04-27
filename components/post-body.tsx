import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight';
import { NextPage } from 'next';


export default function PostBody({ content }) {
  return (
    <div className="markdown-body max-w-5xl ">
      <ReactMarkdown source={content}
        renderers={{
          code: HighlightCode
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
			<br/>
		</div>
	)
}