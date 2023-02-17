//seed object for the blog
const { Blog } = require('../models');

const blogData = [
  {
    title: 'Modern tech and security issues',
    content: 'Security in th emodern world is getting more and more intense as businesses, individuals and companies face attacks and data theft and malware just to name a few.',
    user_id: 1
}
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;