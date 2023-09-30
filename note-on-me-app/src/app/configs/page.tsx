import { Typography, Button} from '@mui/material'
import Link from 'next/link'

import React from 'react'

const ConfigPage = () => {
  return (
    <>
        <main>
            <Typography variant='h1'>Configuration Page</Typography>
            <Button>
                <Link href='/'>Go to Home Page</Link>
            </Button>
        </main>
    </>
  )
}

export default ConfigPage