import Image from 'next/image'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import { tauri } from '@tauri-apps/api'
import MainDrawer from './components/drawer'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
        <MainDrawer></MainDrawer>
      </Container>
    </main>
  )
}
