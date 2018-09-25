---
layout: post
title:  SCTA, LombardPress, and the Sentences Commentary Corpus
date:   2016-08-02
redirect_from:
  - bcht2016
tags: depreciated
---

The following is a version of the presentation given at: *The Boston Colloquy on Historical Theology*, August 2nd, 2016, at Boston College, Boston, MA

# Introduction: The Power and Potential of Data Re-Use

The work being done under the auspices of the SCTA and LombardPress shares many of the goals noted by the GRPL.

Some of our goals include the following:

* We want to create environments (plural) where users can freely access the entire corpus of *Sentences* commentaries at the touch of a button.
    - This includes both online reading environments, traditional printed critical editions, as well more abstract data visualization environments.
* We want to make the corpus searchable and to be able to filter those results by a variety of parameters.
    - For example, we want to be able to search for a word or phrase, and then filter those results by century, by author, or the region in which the author was working, or the Order to which the author belonged.
    - Further, we want to be able to search across works and filter by parts of a *Sentences* commentary, such as searching only prologues, or only instances of distinction 1 or distinction 17.
* We also want to link the critical text to diplomatic transcriptions of text witnesses and to the images of those witnesses.
    - These kinds of connections open up further search possibilities, such as the ability to search not only for every instance of a name, such as Robert Holcot, but to filter by various spellings of Robert Holcot, or to generate a list of spellings of a name according to region: in other words, to see all the instances of Robert Holcot in manuscripts written by a German hand.
* And very much like the GRPL, we want to create the infrastructure in which the deep interconnected nature of the *Sentences* commentary tradition (and the scholastic tradition in general) can become transparent and traceable both by the human reader and computer applications.
    - For example, we want to be able to begin at a particular quotation, such as Hebrews 11:1, and then see every instance of this quotation in the entire corpus.
    - We then want to be able to filter these results by various locations in a *Sentences* commentary in which the quotation might appear. For example, I may only want to see where this quotation has been used after 1400. Or I may only want to see instances of this quotation in Prologues or everywhere but Prologues. Or again, I might want to see how this quotation is written or transcribed by manuscripts originating from Italy or by Italian authors. This latter kind of search might offer us insight, through the variations in how the quotation was written, into the versions of the Latin Bible available in a particular region.
    - We would also like to examine the nature of references themselves, perhaps to see how the nature of citations and references evolved over time.
    - Finally, we also want to track the quotations and references from one *Sentences* commentary author to another. But not only do we want to be able to trace every active reference or quote of Peter Lombard, we also want to be able to automatically invert those references and offer the reader of any point in any commentary a list of every place this passage has been discussed, referenced, or quoted in the rest of the *Sentences* commentary tradition.

The serendipitous harmony of these goals with the goals of the GRPL raises for our field an exciting challenge.

* How do we construct our systems so as to maximize the re-usability of the data we are creating?
* How do we organize our labor and the data we produce so as to promote the construction of beautiful books, helpful reading applications, innovative data visualizations, and experimental abstract analysis, all the while reducing data redundancy and continually promoting collaboration over competition?

Our approach has been to radically separate the data we are producing (that is our editions of the text) from any particular presentational form.

This why there are two different names for conceptually distinct and separable parts of our work.

On the one hand, there is what we have, up until now called the *Sentences Commentary Text Archive*. This name is now being changed to the more generic *Scholastic Commentaries and Texts Archive* so that we can expand our models to other scholastic works.

This archive is composed of two pieces, the storage of the raw data (that is our editions abstracted from any "presentational form") and a database of millions of pieces of metadata that allow us to offer the kinds of connections and searches described above. At a very simple level, it functions like a machine readable library catalog that other computer applications can read and use to request various parts of the corpus in order to do further things with that information.

LombardPress-Web is the name we have given to one such completely different application that knows how to read this database. LombardPress-Web queries this data for the information it needs and then displays the results and the text in a web environment for interested readers to read and search.

I'll turn to some examples of this momentarily, but I want to stop here and emphasize how this addresses the above problem. When you visit the LombardPress-Web platform, it may look and feel as though you are visiting a website on a server that contains lots of texts and images.

But in actual fact, the server that displays this data contains no text or images. It simply knows how to request this information from the completely separate and publicly accessible SCTA database.

This means the text you see on one website is not locked or siloed in that website. Anyone else can build their own application or website that simply queries for the information they want and then displays it the way that seems best to them.

So, in the case of our collaboration with the GRPL, it would be a shame for each project to be re-editing and re-encoding the same text. Nevertheless I think we have both made really interesting websites and it would be a shame to force all our editions to be viewed in one and only one reading environment.

Instead, it would be ideal if we could commit to separating our editions from being locked into one print version, one website, or one presentational form. By abstracting our editions from their presentational form, we can, through our collective editorial work, contribute to a single connected corpus, from which we can request any information we want and then render or display that information in any format that suits our purposes or needs.

## Examples and Demonstrations

With that in mind let me close by offering some examples of how this kind of data re-use works in our case.

### LombardPress Print

First, it should be emphasized again that our approach is in no way opposed to the goal of creating beautiful traditional print books. Here are some examples of the output we can produce.

![]({{ site.assets_url }}porto-slides/typeset-print-edition.jpg)

![]({{ site.assets_url }}graciliscover.png)

![]({{ site.assets_url }}example-lbp-print-output.png)

However, what we do want to insist on is that, in the process of creating a great book, we need to prioritize the creation of great data before focusing on how that data will be displayed in a printed format. When we commit to creating great semantically encoded, machine readable data, we can automatically create beautiful books and simultaneously enable other kinds of possibilities.

### Database Build

The screen shot below is an example of what we can do, once our editions are "semantically" encoded and machine readable. This program is crawling all of the files that are used to create print editions. As it crawls this data it is constructing a database that can be used as a service by other applications.

![dbbuild]({{ site.assets_url }}Screen-Shot-2015-09-07-at-1.03.42-PM.png)

### Database Visualization

The result of crawling these documents can be viewed in our database visualization at [http://scta.info](http://scta.info).

![db-result]({{ site.assets_url }}scta-db-visualization.png)

### LombardPress Web

This database becomes a service that makes multiple web applications possible. One such application is the LombardPress web publication framework. LombardPress is simply one application that knows how to query the underlying public database for the information it needs in order to create a unique reading environment. See for example: [http://scta.lombardpress.org](http://scta.lombardpress.org).

![]({{ site.assets_url }}porto-slides/plaoul-with-images-example.png)

![]({{ site.assets_url }}porto-slides/lbp-quotedBy-display.png)

![]({{ site.assets_url }}porto-slides/lbp-with-app.png)

![]({{ site.assets_url }}porto-slides/lbp-with-collation.png)

![]({{ site.assets_url }}porto-slides/lbp-with-referenced-text-and-para-info.png)

### Mirador

But the important point is that this information is not locked into the the LombardPress application. Other applications can also request information from the same public database and create alternative reading environments. One such example is Mirador. See for example: [http://miradorlab.scta.info](http://miradorlab.scta.info) and [http://projectmirador.org](http://projectmirador.org)

![]({{ site.assets_url }}2016-04-16-iiif-webmentions/mirador-view-after-search.png)

![]({{ site.assets_url }}porto-slides/mirador-manifest-list.png)

### SCTA Statistics

Another application can choose to display abstract statistics rather than texts.

![]({{ site.assets_url }}Screen-Shot-2016-03-24-at-10.52.34-AM.png)

![]({{ site.assets_url }}Screen-Shot-2016-03-24-at-10.52.18-AM.png)

![]({{ site.assets_url }}plaoul-wordcount.png)


### Basic System Overview

Below is a basic visualization of the separation of core services from applications that ultimately display information to the end user.

![lbp-flow2]({{ site.assets_url }}lbp-flow2.jpg)
