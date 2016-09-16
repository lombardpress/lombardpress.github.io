---
layout: post
title: Seamlessly converting a TEI critical edition to camera-ready print proofs
date: 2015-08-03
permalink: /seamlessly-converting-a-tei-critical-edition-to-camera-ready-print-proofs/
---

While I think it's best to work on your text directly in TEI, it can often be really nice to see your text in a well format print layout as you work. This can be really useful in a complicated document where the angle brackets and nesting elements make it hard to read and proof the actual text.

I also think it is important for the TEI community to show people that TEI encoding doesn't mean you are committed to web publication only. Semantic encoding is also great for a really robust print workflow.

To aid in this effort, I've built a little tool that let's quickly convert your TEI text to a nicely formatted PDF, which will update every time you run the script.

The tool is here, [https://github.com/lombardpress/lombardpress-print"](https://github.com/lombardpress/lombardpress-print) and can be immediately used by anyone with a unix system and a little bit of bash command-line knowledge. See the "readme.md" file for install instructions.

It's currently designed for texts using the LombardPress TEI customization schema. But you can easily supply your own stylesheet. I may add some other stylesheets some day. Feel free to create an issue ([https://github.com/lombardpress/lombardpress-print/issues](https://bitbucket.org/lombardpress/lombardpress-print/issues)), if you'd like to see further development. Or fork it and help me make it better.

Here's a demo of how I use it.

<iframe width="100%" height="450px" src="https://www.youtube.com/embed/mbHsuR82TuQ" frameborder="0" allowfullscreen></iframe>
