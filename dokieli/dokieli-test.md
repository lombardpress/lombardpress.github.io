---
layout: dokieli
title:  LDN and the SCTA
date:   2016-12-23
---
# LDN and the SCTA: Speculative Musings on the Power and Possibilities of Linked Research

DOCUMENT STATUS: Public Draft (Highly Subject to Change)

## Aims of the SCTA

[The Scholastic Commentaries and Texts Archive (SCTA)](http://scta.info) is an RDF database, designed to generate unique RDF IDs for granular components, linking all paragraph and sections together through a variety of relationships (isPartOf, references, abbreviates, copies, isRelatedTo, etc.) and linking these text parts to their manifestations in various books, manuscripts, and digital transcriptions (see [http://lombardpress.org/2016/06/12/DTS-modeling-proposal/](http://lombardpress.org/2016/06/12/DTS-modeling-proposal/)).

A key feature of this approach is that we can create relationships between the entire corpus: relationships between discrete sections of enormous texts written over 500 years of continuous discourse. Each time a new text is edited and sources are identified, these asserted relationships can be inverted and we can, for example, automatically collect all the places a paragraph written in the 12th century is discussed or referenced over the next 500 or so years of medieval thought.

## Unrealized Potential of Linking Secondary and Primary Sources

This approach un-taps **only some** of the potential of linked research. While it helps us to link together the primary sources of the corpus as they become available, we do not yet have a mechanism to link together the many secondary articles quoting, referencing, and analyzing various parts of the SCTA corpus.

In an ideal world, we would like an automated way to collect (or be notified about) any discrete section of a primary source text within corpus that has been cited or discussed in any secondary article.

With a list of referencing secondary articles, we can, in our display to the user, offer a list of distributed secondary articles (i.e. hosted anywhere) that discuss the primary source passage in question.

## What if? Dokieli Articles, LDN, and SCTA Integration

What might this look like in practice?

While I'm still getting up to speed on [Linked Data Notifications](https://www.w3.org/TR/ldn/) and [Dokieli](https://dokie.li/), it seems worthwhile to speculate about what this might look like in practice.

Let's imagine I'm writing an article about scholasticism in markdown, with the plan to publish the article via my personal Jekyll blog (as I'm doing here). Whenever I want to quote a passage from a text within the SCTA corpus, I can simply include a reference to the SCTA ID for that passage, like so:

  >> Quod non videtur, quia secundum Augustinus in Sermone communi de uno martyre "si servasset in se homo bonum quod in illo creavit Deus, id est imaginem suam, semper laudaret dictum non solum lingua sed et vita" etc. -- [http://scta.info/resource/b1d3qun-qnveid](http://scta.info/resource/b1d3qun-qnveid).

If each resource within the SCTA catalogue has an "inbox" property, then, when the article is published, a series of notifications could be sent out to the relevant inboxes for each passage quoted in the article. Likewise, since each of these paragraphs is connected to IIIF canvas, a second series of notifications could be sent out to every IIIF canvas inbox, alerting the holding library to the fact that the text from this manuscript page has been discussed. Further, if anyone comments on the quoted passage, using the [Dokieli](https://dokie.li/) framework, that comment could be stored anywhere, and at the same time every system displaying the passage in question would be aware of the comment. This includes both the system displaying the primary source text and the system displaying the secondary source article.

For example, when the [LombardPress-Web](http://scta.lombardpress.org) application displays the primary source text and the user asks for information about this text, a request can be made to the appropriate inbox, and a list of related articles can be displayed along side the target section of text. Such a display might look like the following.

![Lbp-side-panel](/assets/images/lbp-side-display.png)
