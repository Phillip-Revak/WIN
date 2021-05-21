package com.tts.TechtTalentBlog.service;

import com.tts.TechtTalentBlog.model.BlogPost;

import java.util.List;
import java.util.Optional;

public interface BlogPostService {

    BlogPost addNewBlogPost(BlogPost blogPost);

    Iterable<BlogPost> getAllBlogPosts();

    void deletePostById(Long id);

//    List<BlogPost> getAllBlogPostsasList();
}
