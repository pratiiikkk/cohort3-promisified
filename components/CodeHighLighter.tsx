import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import  docco  from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeHighLighter = ({ code }:{
    code: string
}) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={docco}
      className="rounded-lg p-4 md:p-6 lg:p-8"
    >
      {code}
    </SyntaxHighlighter>
  )
}