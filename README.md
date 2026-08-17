# OrderFlow marketing site

One-page static site for [orderflow-erp.com](https://orderflow-erp.com).

## Preview locally

Open `index.html` in a browser, or from this folder:

```bash
npx --yes serve .
```

## Contact form

The form posts to FormSubmit at `mmayne@orderflow-erp.com`. The first submission sends a confirmation email — click that once so later inquiries arrive.

If FormSubmit is unavailable, the page falls back to a pre-filled mailto.

## Drop in a demo video later

In `index.html`, find the **VIDEO SLOT** comment in the `#demo` section. Replace the workflow mock inside `.product-frame` with:

```html
<video controls poster="assets/demo-poster.jpg">
  <source src="assets/demo.mp4" type="video/mp4" />
</video>
```

or a YouTube iframe.

## Drop in a founder photo later

Add `assets/mark.jpg`. In the `#founder` section, replace the `MM` initials with:

```html
<img src="assets/mark.jpg" alt="Mark Mayne" width="96" height="96" />
```

## Calendar booking later

Search for `mailto:mmayne@orderflow-erp.com?subject=OrderFlow%20demo` and point **Book a Demo** at your scheduling URL.
