package com.tts.TechtTalentBlog.controller;

import com.tts.TechtTalentBlog.model.BlogPost;
import com.tts.TechtTalentBlog.repository.BlogPostRepository;
import com.tts.TechtTalentBlog.service.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class BlogPostController {

    @Autowired
    private BlogPostService blogPostService;

    @GetMapping("/")
    public String index(BlogPost blogPost, Model model) {
        model.addAttribute("posts", blogPostService.getAllBlogPosts());
        return "blogpost/index";
    }

    @GetMapping(value = "/blogposts/new")
    public String newBlog (BlogPost blogPost) {
        return "blogpost/new";
    }

    @PostMapping(value = "/blogposts")
    public String addNewBlogPost(BlogPost blogPost, Model model) {
        blogPostService.addNewBlogPost(blogPost);
        model.addAttribute("title", blogPost.getTitle());
        model.addAttribute("author", blogPost.getAuthor());
        model.addAttribute("blogEntry", blogPost.getBlogEntry());
        return "blogpost/result";
    }

    @DeleteMapping("/blogposts/{id}")
    public String deletePostWithId(@PathVariable Long id, BlogPost blogPost){
        blogPostService.deletePostById(id);
        return "redirect:/";
    }


}
