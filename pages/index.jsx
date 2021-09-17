import Layout from '../src/components/layout'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {
  PageContainer
} from './index.style'

export default function Home() {
  return (
    <PageContainer>
      <Layout />
    </PageContainer>
  )
}
