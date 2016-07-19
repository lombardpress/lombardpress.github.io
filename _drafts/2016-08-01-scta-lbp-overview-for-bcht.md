---
layout: post
title:  SCTA, LombardPress, and the Sentences Commentary Corpus
date:   2016-07-01
---

# Introduction: The Power and Potential of Data Re-Use

The work being done under the auspices of the SCTA and LombardPress shares many of the goals noted by the GRPL. 

Some of our goals include the following:

* We want to create environements (plural) where users can freely access the entire corpus of *Sentences* commentaries at the touch of a button.
    - This includes both online reading environments, traditional printed critical editions, as well more abstract data visualization environments.
* We want to make the corpus searchable and to be able to filter those results by a variety of parameters.
    - For example, we want to be able to search for a word or phrase, and then filter those results by century, by author, or the region the author was working, or the Order to which the author belonged. Or futher, we want to be able to search across works and filter by parts of a Sentences commentary, such as searching only prologues, or only distinction 1s, or distinction 17s.
* We also want to link the critical text to diplomatic transcriptions of text witness and to images of those witnesses.
    - These kinds of connections open up further search possibilities, such as the ability to search not only for every instance of a name such as Robert Holcot, but to filter by various spelling of Robert Holcot, or to generate a list of spellings of a name according to region: in other words, to see all the instances of Robert Holcot in manuscripts written by a German hand.
* And very much like the GRPL, we want to create the infrastructure in which the deep interconnected nature of the *Sentences* commentary tradition (and the scholastic tradition in general) can become transparent and traceable both by the human reader and computer applications.
    - For example, we want to be able begin at a particular quotation, such as Hebrews 11:1, and then see every instance of this quotation in the entire corpus. We then want to be able to filter by various locations in a Sentences commentary in which the quotation might appear. For example, I may only want to see where this quotation has been used after 1400. Or I might only want to see instances of this quotation in Prologues or everywhere but Prologues. Or again, I might want to see how this quotation is written or transcribed by manuscripts originating from Italy or by Italian authors. This latter kind of search might offer us insight, through the variations in how the quotation was written, into the versions of the Latin Bible available in a particular region. 
    - We would also like to examine the nature of references themselves, perhaps to see how the nature of citation and references evolved overtime.
    - Finally, we also want to track the quotations and references from one Sentences Commentary author to another. But not only do we want to be able to trace every active reference or quote of Peter Lombard, we also want to be able to automatically invert those references and offer the reader of any point of any commentary a list of every place this passage has been discussed, referenced, or quoted in the rest of the *Sentences* commentary tradition.

The serendipitous haromony of these goals with the goals of the GRPL raises for our field an exciting challenge. 

* How do we construct our systems so as to maximize the re-useability of the data we are creating? 
* How do we organize our labor and the data we produce so as to promote the construction of beautiful books, helpful reading applications, innovative data visualizations, and experimental abstract analysis, while all the while reducing data redundancy and continually promoting collaboration over competition? 

Our approach has been to radically spearate the data we are producing (that is our editions of the text) from any particular presentational form.

This why there are two different names from conceptually distinct and separable parts of our work. 

On the one hand, there is what we have, up until now called the *Sentences Commentary Text Archive*. This name will mostly like change to the more generic *Sources, Commentaries, and Text Archive*, so that we expand our models to other scholastic works. 

This archive is composed of two pieces, the storage of the raw data (that is our editions abstracted from any "presentational form") and a database of millions of pieces of metadata that allow us to offer the kinds of connections and searches described above. At a very simple level, it functions like a machine readable library catalogue that other computer applications can read and use to request various parts of the corpus in order to do further things with that information. 

LombardPress-Web is the name we have given to one such completely different application that knows how to read this database and then do different things with the information contained within it, such as display the text in web environment for interested readers to read and search.

I'll turn to some examples of this momentarily, but I want to stop here and emphasize how this addresses the above problem. When you visit the LombardPress Web platform, it may look and feel as though you are visiting a website on a server that contains lots of and texts and images.

But in actual fact, the server that displays this data contains no text or images. It simply knows how to request information from the completely separate and publically accessible SCTA database.

This means the text you see on one website is not locked or siloed in that website. Anyone else can build their own application or website that simply queries for the information they want and then displays it the way that seems best to them.

So, in the case of our collaboration with the GRPL. It would be a shame for each project to be re-editing and re-encoding the same text. But nevertheless I think we have both made really interesting websites and it would be shame to force all our editions to be viewed in and only one reading environment. 

Instead, it would be ideal if we could commit to separating our editions from being locked into one print version, one website, or one presentation form. By abstracting our editions from their presentational form, we can, through our collective editorial work, contribute to a single connected corpus, from which we can then request any information we want and render or display it in any format that suits our purposes or needs. 

## Examples and Demonstrations

With that in mind let me close by offering some examples of how this kind of data re-use works in our case.

### Database Build

![dbbuild](/assets/images/Screen-Shot-2015-09-07-at-1.03.42-PM.png)

### LombardPress Print

![](/assets/images/porto-slides/typeset-print-edition.jpg)

![](/assets/images/graciliscover.png)

![](/assets/images/example-lbp-print-output.png)

### LombardPress Web

![](/assets/images/porto-slides/lbp-quotedBy-display.png)

![](/assets/images/porto-slides/lbp-with-app.png)

![](/assets/images/porto-slides/lbp-with-collation.png)

![](/assets/images/porto-slides/lbp-with-referenced-text-and-para-info.png)

### Mirador

![](/assets/images/2016-04-16-iiif-webmentions/mirador-view-after-search.png)

![](/assets/images/porto-slides/mirador-manifest-list.png)


### SCTA Statistics

![](/assets/images/Screen-Shot-2016-03-24-at-10.52.34-AM.png)

![](/assets/images/Screen-Shot-2016-03-24-at-10.52.18-AM.png)

![](/assets/images/plaoul-wordcount.png)


### Basic System Overview

![lbp-flow2](/assets/images/lbp-flow2.jpg)

