import Container from './container'
import cn from 'classnames'

export default function Alert() {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-1 border-accent-2': true,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
              The source code for this blog is{' '}
              <a
                href={`https://github.com/persunde/persunde.github.io/`}
                className="underline hover:text-success duration-200 transition-colors"
                target="_blank"
              >
                available on GitHub
              </a>
        </div>
      </Container>
    </div>
  )
}
