import Layout from '../../components/layout';
import {getAllPostIds} from '../../lib/posts';

export default function Post(){
  return(
    <Layout />
  )
}

export async function getStaticProps({params}){
  // Fetch necessary data for the blog post using params.id
}

export async function getStaticPaths(){
const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}
