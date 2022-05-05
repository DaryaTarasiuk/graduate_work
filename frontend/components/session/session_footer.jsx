import React from 'react'

export default function SessionFooter() {
  return (
    <footer className='flex-row-center'>
      <div className='session-footer flex-row-between'>
        <p>© 2022 Darya Tarasiuk </p>
        <ul className='flex-row-center'>
          <li className='session-footer-link'>
            <a href='https://github.com/DaryaTarasiuk' target='_blank'>
              GitHub
            </a>
          </li>
          <li className='session-footer-link'>
            <a href='https://www.linkedin.com/in/darya-tarasiuk-b92623234/' target='_blank'>
              LinkedIn
            </a>
          </li>

        </ul>
      </div>
    </footer>
  )
}
