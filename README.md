# Text Formatting in HTML

## Learning Goals

- Learn the most common text formatting tags
- Practice what we've learned by getting some content to appear on a web page

## Introduction

In a browser, all visible content of an HTML document is contained within the
`body` tag. HTML developers spend most of their time here. All the formatting
and styling, adding in images and links, etc. is work being done for the visible
content of a web page. In modern HTML, there is actually quite a lot that can go
into this work, but when it comes to getting started, the best place is by
adding and formatting the _text_ content.

In this lesson, we will be going over some the basic HTML tags that are
important for formatting text.

## Getting started

Open `index.html` and take a look at what is there. We see that we have the
basic HTML skeleton provided, so all we need to focus on is adding content to
the `body`.

First, let's get started by typing `Hello World` inside the `body` tags. With
some content written, we can start up `httpserver` and [check out what we
have][pages-in-learn-ide]. If you open a web tab that points to this you should
see the text 'Hello World' displayed on the page.

Cool, we've got text on the page! Head back to the text editor, and in
`index.html`, hit `return` twice so you're two lines below `Hello World`. Here,
type `Hello Moon`. Return to "viewing" browser tab and refresh. Great, but very
plain. In order to actually _format_ text, we will need to wrap our text in HTML
tags. First, we'll start with formatting _paragraphs_

## Learn The Most Common Text Formatting Tags

### `p`

On the same line as `Hello World`, right before, add `<p>`, and immediately
following, `</p>`. If you do the same for `Hello Moon`, then refresh your web
page in the browser, you should notice a change. The `p` stands for _paragraph_,
and is used to wrap text with some built in formatting rules. Content wrapped in
`p` tags will be given a small buffer of space around it, what we call a
'margin', which prevents the text from running right up against other content.

The `p` tag is great for wrapping a one or more sentences of text. If there is a
lot of content on a page, typically each paragraph would be wrapped in its own
`p` tag, creating visually appealing breaks in the text.

### `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>`

Aside from paragraphs, it would be nice to be able to indicate titles, headings
and subheadings in our page. The way we do this is by using _header_ tags,
written from the largest, `<h1>`, down to the smallest, `<h6>`.

Above our `p` tags, inside the `body`, write `Title` within opening and closing
`<h1>` tags, and then, on the next line, a smaller subheading that says
`Subtitle` using `<h2>`. If we save and look at the HTML in our browser,
refreshing the page, we can see that 'Title' appears much larger as an `<h1>`
heading.

Headers are useful for search engine optimization, with the largest heading,
`<h1>`, carrying the highest importance to search engines. They are also very
useful for breaking up content into a more reader friendly structure.

If you add `<h3>`, `<h4>`, `<h5>` and `<h6>` tags to the page, you'll see that
each is slightly smaller than the last.

### Italic, Bold, Emphasis and Strong Tags

Sometimes, when it comes to formatting, we want to add some emphasis to a small
part of our text, typically by _italicizing_ a word or a phrase. In this case,
we can use `<em>`, for emphasis. In addition, for times when we want to **bold
text**, we have `<b>`:

```html
<p>
  <em>Hello World!</em>
  <strong>Warning!</strong>
</p>
```

If you've dabbled in HTML before, you may be aware that there are two other tags
that can also be used, `<i>`, for _italics_ and `<b>` for **bold**. The `<em>`
and `<strong>` tags were introduced in HTML5 and are newer than `<i>` and `<b>`.
They are part of a shift in the language to emphasize the _semantic_ use of HTML
rather than stylistic use. HTML is a language to _markup_ hypertext; the idea
behind these new tags is that they give _meaning_ to what they wrap, rather than
just styling. Subsequently, the use cases of `<b>` and `<i>` changed:

- `<b>` - bolds text for stylistic reasons
- `<i>` - used for text that is in an alternate voice, such as a definition or
  foreign word
- `<em>` - wraps text content that is meant to be emphasized
- `<strong>` - wraps text that is of importance, such as a warning message

So, while `<i>` and `<em>` both italicize, and `<b>` and `<strong>` both bold
text, they are really understood to have four separate use cases.

## Challenge

Okay, it is time to apply what we've learned. In the `index.html`, there are
comments regarding the specific deliverables for this lab.

Run `httpserver` and open the file in browser to see what your HTML looks like.
If you have the server running, use `ctrl` + `C` to stop it in order to run
other commands. Once you've done as the comments request, run the `learn`
program in the terminal to see whether you've met the tests' expectations.

Keep in mind that after you fix one test, you might face a new one! The tests
are guiding you.

## Conclusion

There so are many HTML tags that we cannot discuss them all, and many of those
tags apply default text formatting. Paragraph and header tags are just some of
the most common. The main take away here is that, by using the correct HTML tag,
we can apply some simple formatting to turn plain text into something a bit more
appealing.

## Resources

- [HTML Tag Reference](https://www.w3schools.com/tags/tag_i.asp)

[pages-in-learn-ide]:
  http://help.learn.co/the-learn-ide/common-ide-questions/viewing-html-pages-in-the-learn-ide
