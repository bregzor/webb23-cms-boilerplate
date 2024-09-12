import StoryblokClient from 'storyblok-js-client';
import React from 'react';

const accessToken = process.env.NODE_ENV === 'production'
  ? process.env.NEXT_PUBLIC_PRODUCTION_STORYBLOK_TOKEN
  : process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN;

const Storyblok = new StoryblokClient({ accessToken });

const getVersion = () => (process.env.NODE_ENV === 'production' ? 'published' : 'draft');

const fetchNotFoundContent = async () => {
  try {
    const res = await Storyblok.get('cdn/stories/404-page', {
      version: getVersion(),
    });
    if (!res.data || !res.data.story || !res.data.story.content || !res.data.story.content.body) {
      throw new Error('No 404 page content found');
    }
    // Extract the first element from the body array
    return res.data.story.content.body[0] || {};
  } catch (error) {
    console.error('Error fetching 404 page content:', error.message);
    return {
      title: '404',
      message: 'Sorry, this page does not exist.',
    };
  }
};

export async function getServerSideProps() {
  const content = await fetchNotFoundContent();
  console.log('Fetched content for 404:', content); // Add logging to check content
  return {
    props: {
      content,
    },
  };
}

const NotFound = ({ content }) => {
  // Ensure content is defined and has default values
  const title = content?.title || '404';
  const message = content?.message || 'Sorry, this page does not exist.';

  console.log('Content in NotFound component:', content); // Add logging to check content

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '4rem' }}>{title}</h1>
      <p style={{ fontSize: '1.5rem' }}>{message}</p>
      <a href="/" style={{ fontSize: '1rem', color: '#0070f3' }}>Go back to Home</a>
    </div>
  );
};

export default NotFound;
