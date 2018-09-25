---
layout: post
title:  The Digital Latin Library and a New Kind of Peer Review
date:   2016-03-30
permalink: /the-dll-and-a-new-kind-of-peer-review/
tags: depreciated
---

Below is a transcript of my presentation at the:

Renaissance Society of America Annual Conference
March 31st, 2016
Boston, MA

# The Digital Latin Library and the Future of Latin Critical Editions

or

# An argument for why we need DLL and RSA collaboration to help facilitate a new kind of peer review

## I. Introduction

Today, in my capacity as a member of the Advisory Board to the Digital Latin Library, I want to make the argument for why we need the RSA to become more deeply and actively invested in the mission of the Digital Latin Library.

My interest and involvement with the DLL comes from two directions. First, as I said, I am on the advisory board.

But my other interest comes from my own work as a scholar and editor of medieval and renaissance Latin philosophical texts and as a digital humanist. I became interested in the DLL precisely at the moment when I encountered a need that is not currently being met anywhere else.

Therefore, the argument that I want to make for the need for the purposeful and active involvement of the RSA with the DLL comes from a place of real practical experience.

Accordingly, I want to try to show that need through reflections on the project I’m involved with, the kinds of hurdles and difficulties we are facing, and our hopes for how the DLL can help us overcome those hurdles.

## II. The Stated Goals of the DLL

Let me begin with the stated goals of the DLL:

>1. To publish and curate critical editions of Latin texts, of all types, from all eras, and to facilitate an ongoing scholarly conversation about these texts through open collaboration and annotation.

>2. To facilitate the finding and, where openly available and accessible online, the reading of all texts written in Latin.</blockquote>
See more: [http://digitallatin.org/about-project/mission-and-goals](http://digitallatin.org/about-project/mission-and-goals)

It is the first goal that I want to focus on today. The DLL elaborates on goal one as follows:

>We aim to accomplish the first part of our mission with the Library of Digital Latin Texts, a series of new, born-digital critical editions to be published under the auspices of the three learned societies that have backed this project from the beginning: the Society for Classical Studies, the Medieval Academy of America, and the Renaissance Society of America. These learned societies represent and uphold the standards of professional scholarship in their respective fields, so they have control over what is published in the LDLT. Their publications and research divisions will review proposals for new LDLT editions and determine which ones will bear their imprimatur. Once proposals have preliminary approval, the DLL will work with editors to make sure that their work conforms to technical specifications established in consultation with the learned societies. The learned societies decide whether or not to publish the final product. There should therefore be no doubt about the quality of the scholarship in an LDLT edition, since it bears the endorsement of the very organization that sets the standards for the discipline.

See: [http://digitallatin.org/about-project/mission-and-goals](http://digitallatin.org/about-project/mission-and-goals)

The DLL envisions facilitating the publication and curation of Latin texts through collaboration with the Society for Classical Studies, the Medieval Academy of America, and importantly the Renaissance Society of America.

At present, the RSA, while expressing support and interest in the proposed collaboration, does not have clear guidelines or procedures about how this review of Latin critical editions will take place. This is a lack we need to address with some urgency.

It is my opinion that editorial work on Latin critical editions is on the cusp of something revolutionary. However, until this social challenge—the challenge of offering acceptable and acknowledged peer-review of the encoded text rather than any particular presentation of this text—this revolution will not be able to go forward, but will rather be halted and even pushed farther in the wrong direction.

So let me turn to that argument now.

## II. Large scale corpus analysis

My research interest is centered squarely on a large corpus of medieval and renaissance commentaries on the *Sentences* of Peter Lombard written in the 12th century. There are somewhere between 1000 and 1400 medieval and renaissance commentaries, constituting hundreds of thousands of pages, surviving in thousands of manuscripts and fragments scattered in libraries throughout the world.

These texts are also encyclopedic. The commentaries are traditionally divided into four books covering a huge variety of topics, such that few scholars study or even edit an entire work. Rather it is customary to jump around to different common conceptual discussions in different commentaries.

The texts are also intimately related to each other. Authors are constantly referencing previous commentaries. Likewise, many commentaries are related to others as revisions, redactions, or abbreviations.

I could spend the entire time talking about the complexity of possible relationships. The point I want to make at the moment, however, is that this corpus is so big and so complex that no individual person could ever read the entire corpus and thereby discover the full network of connections latent within it.

This size and complexity immediately entices us to look to the computer and its immense processing power as a way to offer us new kinds of analysis and the discovery of connections that no individual person could ever discover on their own.

Let’s consider just a couple of examples:

Imagine a user who wanted to study the use of marginal notations in <em>Sentences Commentaries over five centuries. I would like to be able to offer this user a search interface where they can query for every marginal notation and then filter those results by where they occur in a commentary, or by what kind of marginal notation it is, or by whether it occurs in a German manuscript or a French manuscript, or by whether the marginal note references a name or work title. Finally, I’d like to be able to offer that user the text of the marginal note alongside and an image of that note as it appears in the manuscript facsimile.

Or, imagine a researcher who wants to study the history of the interpretation of John 1:1. I want to be able to offer that user a search interface where they can begin at the quotation of John 1:1 and then identify every instance of this verse in every *Sentences* commentary. Once they have identified every instance of the verse being used, I would like them to be able to filter these results to find instances that occur only in book 1 (and not in Book 2). I would like them to be able to further filter these results for instances that only occur in discussions about, for example, “grace” or only in works written by Dominicans.

Finally, we may just want to answer simple questions about the corpus. Is this work a long work or short work? Does it quote the Bible a lot or a little? We actually don’t have any way of scientifically answering these questions. Right now we mostly have impressions. They only way we will be able to get scientific answers to these questions is by being able to quickly compute the word count of a text or the citation frequency and then compare that to averages for the entire corpus or subsections of that corpus.

These are amazing possibilities and they are technically feasible possibilities. I’m working hard to try to lay that foundation through the construction of metadata database that I call that *Sentences Commentary Text Archive*.

![SCTASCHEMA2.png]({{ site.assets_url }}SCTASCHEMA2.png)

The *Sentences Commentary Text Archive* has mapped out a complex data-model, implemented as RDF and made available as a public SPARQL endpoint that any web application can then query and use.

This data model and the associated metadata is what allows us to quickly organize the corpus and then offer the kinds of search results discussed above.

![plaoul-wordcount.png]({{ site.assets_url }}plaoul-wordcount.png)

Thus (as seen above) we can begin to accomplish the simple work of calculating the total size of the corpus, and then begin comparing the sizes of different works within that corpus.

Further, we can start producing statistical analysis of quotations used within the corpus, or calculate the frequency of names used, or the frequency of bible verses used.

![quoteResults.png]({{ site.assets_url }}quoteResults.png)

![Screen-Shot-2016-03-24-at-10.52.18-AM.png]({{ site.assets_url }}Screen-Shot-2016-03-24-at-10.52.18-AM.png)

![Screen-Shot-2016-03-24-at-10.52.34-AM.png]({{ site.assets_url }}Screen-Shot-2016-03-24-at-10.52.34-AM.png)

Finally, we can use that same data model to link the text to manuscript facsimiles, and then allow a user to move from search results to the manuscript page on which those search results occur.

![Screen-Shot-2016-03-24-at-10.56.15-AM.png]({{ site.assets_url }}Screen-Shot-2016-03-24-at-10.56.15-AM.png)

In short, with our data model, we are trying to lay the foundation for all of this possibility. And in many ways this technical infrastructure has already been actualized.

Moreover (as I will demonstrate in a moment) these goals are not incompatible with other goals of producing beautiful books and inspiring reading applications.

## III. The Problem

However, there is a problem. These goals are only compatible with the goals of making individual printed books, if there is a revolution in the way that editors think about their editorial work.

More than anything else, this means a profound appreciation of the power and potential that comes with de-coupling our common association of the “finished edited text” to its presentation form.

Currently, we suffer from the common problem that, while a great deal of editorial work continues today on *Sentences* commentary texts, most scholars still only think of their text as finished and reviewed (and often only get credit for their work) when they see it in a printed book format. This means that the idea of a reviewed text or text with the *imprimatur* of the field is tightly coupled to a very particular form of presentation.

What is more, at present, the standard practice of producing this “particular form of presentation” is to work with a publisher, who demands—as the price of their *imprimatur* and publication assistance—that each editor adopts their unique and non-standardized workflow procedure (by this I generally mean the underlying encoding standards). Worse than this, the price of an *imprimatur* typically amounts to conceding control of their hard work to the publisher who has little to no incentive to make the underlying data available for reuse by the field at large.

What this amounts to is that each printed book, produced according to the traditional workflow, becomes an independent data silo, which prevents us from studying the interaction between texts that are themselves highly interactive.

The best example I have of this absurdity is the critical edition of Gregory of Rimini.

A great 6 volume edition of this text was done in the late 70’s and early 80’s. Today, not only is this data not able to be re-used and studied in the context of the entire corpus. It is incredibly difficult to even access the text as a reader.

![Rimini-Book-Prices1.png]({{ site.assets_url }}Rimini-Book-Prices1.png)

The height of absurdity is that today it is much easier to obtain a copy of this text that was published in 1522 or even a manuscript on Gallica than it is to obtain a copy of the modern text published in the last century. And even if we could do something with it, it will require a great deal of work to OCR this text and re-encode it in preparation from processing.

![Rinini-15221.png]({{ site.assets_url }}Rimini-1522.png)

I think we can be sure we have reached a critical point of crises, when traditional publication actually serves to make editorial work less “public” rather than more public.

And yet today, to our peril, “traditional” data silo-ing publication continues:

Here I would like to simply echo the words of Gregory Crane who writes in the same spirit:

>…the decision to stop handing over ownership of new textual data (and especially any textual data produced with any significant measure of public funding) is, in 2015, a purely political one. There is no practical reason not to make this change immediately. If it takes editors an extra six months or a year (and it should not) because they need to learn how to produce a digital edition, the delay is insignificant in comparison to the damage that scholars suffer when they hand over control of the reconstructed text for 25 years and of the textual notes, introduction and other materials for 70 years after their death.</blockquote>

[http://sites.tufts.edu/perseusupdates/2015/03/04/getting-to-open-data-for-classical-greek-and-latin-breaking-old-habits-and-undoing-the-damage-a-call-for-comment/](http://sites.tufts.edu/perseusupdates/2015/03/04/getting-to-open-data-for-classical-greek-and-latin-breaking-old-habits-and-undoing-the-damage-a-call-for-comment/)

I can only echo and repeat the sense of urgency described by Crane. Every time a new print-only edition is published with a trade publisher, I wince because I know this was a vast effort that will not be able to re-used for analysis within the corpus at large.

There is therefore a need for the field to demand a new kind of workflow. This is something that the <em>Sentences Commentary Text Archive</em> and our publishing system <em>LombardPress</em> is trying to provide. But to truly accomplish this revolution, we need the assistance of the Digital Latin Library and RSA to help us disassociate the notion of field approval and *imprimatur* from the publisher and any particular presentation form.

## IV. An ideal workflow

Let me try to describe in somewhat concrete terms what this workflow could look like.

First and foremost we need the field, not any given publisher to define the underlying encoding standards for the any particular genre text. The Textual Encoding Initiative offers us a fantastic foundation. But each field needs to define its preferred schema even more tightly.

We are attempting to do this with what we call the LombardPress schema v1.0.0 designed especially to meet the idiosyncrasies of *Sentences* Commentaries.

![lombardPress-schema.png]({{ site.assets_url }}lombardPress-schema.png)

At the same time, there is overlap with the concerns of other Latin critical editions, and we are looking to the recommendations of the Digital Latin Library to adopt encoding practices that prioritize compatibility and interoperability wherever possible.

Second, through our data-model, we aim to identify each discrete section of all *Sentences* commentary and develop corresponding “official” git repositories that anyone can fork, work on, and then submit through a pull request for preliminary review. In this way, editorial work can be done in a decentralized way, but the results can be easily brought together.

![pullrequests.png]({{ site.assets_url }}pullrequests.png)

![pull-request-example.png]({{ site.assets_url }}pull-request-example.png)

Third, we are working very hard on a versioning system to describe the unique state of any given edition and to develop an enumerated list of “status” values, so that a text can be easily be identified in its encoded (non-presentation form) as “draft”, “public-draft”, “out-for-review-draft”, and “peer-reviewed”.

![editionStatus.png]({{ site.assets_url }}editionStatus.png)

![print-version-number.png]({{ site.assets_url }}print-version-number.png)

Fourth and finally, we are working hard to develop stylesheets and reusable processing instructions so that encoded editions can be automatically converted to printed books and integrated into sophisticated reading web applications.

![graciliscover.png]({{ site.assets_url }}graciliscover.png)

![print-text-example.png]({{ site.assets_url }}print-text-example.png)

![Screen-Shot-2015-06-17-at-1.57.30-PM.png]({{ site.assets_url }}Screen-Shot-2015-06-17-at-1.57.30-PM.png)

![Screen-Shot-2015-06-17-at-1.56.39-PM.png]({{ site.assets_url }}Screen-Shot-2015-06-17-at-1.56.39-PM.png)

![Screen-Shot-2015-06-17-at-2.03.54-PM.png]({{ site.assets_url }}Screen-Shot-2015-06-17-at-2.03.54-PM.png)

The point to make as we look at these particular representations is that these various representations are only possible because the underlying data is radically divorced from this presentation, independently reviewed, and available in publicly accessible version controlled repositories.

This de-coupling allows us to re-use the data again and again for a variety of purposes and opens up the possibility for this data to be used for purposes not yet seen.

## V. The point of failure

Finally, let me conclude by addressing the critical point of failure.

All of this fails, however, if a critical piece is not in place. Needless to say, all the technological possibility in the world is worthless if editors will not begin directing their effort toward this kind of workflow. The critical piece that is missing, therefore, is a structural mechanism that can provide an *imprimatur* — not for any particular presentation — but for the underlying data itself. Only when this kind of recognition is possible and respected will scholars begin in mass to change their behavior.

This is precisely where the RSA’s collaboration with the DLL is most needed. While the DLL aims to facilitate peer review of TEI encoded texts and help with the technical challenges that will arise, the DLL needs the RSA to take an active role in defining and promoting standards for what it would mean for the underlying data to be peer-reviewed and the mechanisms to offer that kind of review.

It is my hope that someday, the *imprimatur* we are accustomed to seeing on the front of a printed book will be replaced by the kind of “badges” one now sees on open source github repositories.

![code-badges.png]({{ site.assets_url }}code-badges.png)

Such indicators would offer users and applications with quick ways to access and filter reviewed and un-reviewed material, and thereby pass the status of a given edition on to the end user who can then decide for themselves how much trust to place in a particular edition.

This is a revolutionary understanding of the *imprimatur*: an *imprimatur* that can travel with a text to any particular representational form. But it is an essential revolution if we are going to streamline our work so that we can continue printing beautiful books and making beautiful website, while at the same time opening up the possibility for radically new kinds of questions and new kinds of investigations.
