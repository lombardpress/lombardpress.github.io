---
layout: post
title:  Placing Medieval Texts within a Critical Corpus - A Case Study on UPenn MS Codex 686
date:   2015-09-11
permalink: /placing-medieval-texts-within-a-critical-corpus/
---

# Placing Medieval Texts within a Critical Corpus: A Case Study on UPenn MS Codex 686
By Jeffrey C. Witt

Delaware Valley Medieval Association Fall Meeting
Saturday, September 12, 2015

<iframe width="100%" height="450px" src="https://www.youtube.com/embed/YDkf_dYlnMI" frameborder="0" allowfullscreen></iframe>

A transcript of this talk is available below.

## Introduction to Medieval Sentences Commentaries

The corpus I refer to in my title is the nearly five century long medieval tradition of commenting on the Sentences of Peter Lombard. While I imagine this audience is somewhat familiar with this important genre, just so that we're all up to speed, let's review a few important facts.

Reading the Sentences of Lombard quickly became an academic staple in the 12th and 13th centuries. Because of the work's systematic treatment of a variety questions that were of interest to a medieval theologian—questions about God (book 1), Creation (book 2), Christ (book 3), and the Sacraments (book 4)—it naturally became a part of the core curriculum. Moreover, writing a commentary on this text became a kind of credentialing ritual very similar to the modern practice of writing a dissertation.

Today, we know of approximately 1,000 surviving commentaries from the medieval period alone. Many more were written in the modern period, by both Catholics and protestants alike, by those living in Europe and even those now living and working in the colonized new world.

These texts also tend to be enormous. And while in the immediate present we don't have any precise tools to measure the average size or length of these text (a lacuna that I think can be solved by what I will be proposing today), most of these works are printed in multi-volume sets, often totaling thousands of pages.

Moreover, these commentaries are highly dependent on one another and the larger Christian corpus. They are filled with quotations to authorities, references to contemporaries and repeated/shared arguments. Finally, commentaries can by highly derivative of other commentaries, abbreviating or copying large sections from other texts.

In short, if you're interested in intellectual history and intellectual development, the Sentences commentary tradition is a gold mine. It is a five-century long discussion of core questions that, when woven together, produces an amazing tapestry that tells the story of medieval intellectual history leading into the 16th century.

## Problems

Unfortunately, the size and complexity (as well as the obstacles to accessibility) make weaving this tapestry quite difficult. And today I think it is quite fair to say that no one really has a very clear picture of the whole. At best we have anecdotal evidence from select researchers who have made it their life's work to study Sentences commentaries. But the knowledge of the connections and relationships between these texts will fade away when the scholars die; that is, unless we can find a way to preserve this information in a way that allows us to build on it, rather than requiring each researcher to re-discover these connections anew.

Just to give you a few examples: we might start with what I mentioned earlier, namely that we don't really know what constitutes a large, short, or average size commentary besides vague impressions. Sometimes people will point to pages, sometime people will point to column numbers, but this is all very unscientific. What we need is a way to quickly compute the word size of each commentary and then compute the averages. It is a simple task in theory, but the confinement of our editions to the printed page and the loss of access to the digital file actually make this really hard.

We can say similar things about the use of sources. One common research question is about influence and the use of sources. Someone familiar with one text might say something like: this author quotes the bible a lot, or this author cites Augustine a lot, or this person relies on Franciscan authors a lot.

To be frank, this is mostly nonsense. How can we ever know if a source is used in an inordinate amount if we have no access to the norm?

I have still said nothing about our impoverished ability to track relationships between authors and authorities or the re-use of arguments, quotations, or key passages throughout the entirety of the corpus.

## Imagining a Better Way

I can go on, but it's perhaps better if we jump forward to how we might change the situation.

Think for a moment about the richness of information contained in the *apparatus fontium* of a critical edition. Here an editor has tried to cram all the related information she knows about a single text into a small box at the bottom of the page in the hopes that someone might come along and make a connection.

But what if there were a better way?

What if editors could be documenting these connections in such a way that the connections were being collected in a centralized way, contributing to large web that could be crawled backwards and forwards and side to side.

What if we could map the repeated use of sources, the referencing and cross-referencing of arguments, quotations, and commentary sections?

Think about the kinds of searches we could do. For example: we could run string searches looking for spikes in key phrases or n-grams in targeted sections of discrete commentaries. We could filter these searches by whether the location of the author or the religious order to which he belongs.

Further, by giving each discrete paragraph of each commentary and unique and dereferenceable id, we could allow a reader to view these connections at the touch of a button. We could allow a user to read argument refuted in one text, but only fully explained in a completely separate text.

In a world restricted to print alone, finding such a referenced passage would require moving to a completely new volume, perhaps having to order it from Interlibrary Loan and wait for weeks.

## Creating the map: UPenn 686

This and so many more possibilities is what I'm working toward. Today I'd like to show you how we are creating the foundation of these possibilities and already actualizing many of them.

I want to do this by focusing on one very interesting manuscript here in the UPenn library. This manuscript—and the text it is a witness to is an ideal example—for us because of the way that it is deeply dependent on the larger Sentences Commentary corpus and therefore can only be fully appreciated when contextualized within this corpus. The manuscript in question is Upenn codex 686, and it is a witness to the commentary penned by William of Rothwell sometime in the 13th century.

Let's start by thinking about Rothwell's commentary as an ideal object (represented by the gray box) or what the Functional Requirements for Bibliographic Records (FRBR) calls an exemplar.

![rothwell-exmplar]({{ site.baseurl }}/assets/images/rothwell-exemplar.jpg)

From the outset there is a first and immediate level of complexity, which is common to anyone working on manuscripts with multiple witnesses. Upenn codex 686 is one of a set of historical witnesses with sister witnesses in Switzerland, Denmark and elsewhere.

![rothwell-witnesses]({{ site.baseurl }}/assets/images/rothwell-witnesses.jpg)

As much as we might care about the exemplar text, we need to keep in mind that it is an ideal text that never materially existed. That means, when we are trying to understand a text within the larger corpus and commentary tradition, we need to be able to keep these witnesses and their relationships both to each other and to the ideal text organized, so that we can (eventually) identify which material sources were referenced and quoted in the later tradition.

Another layer of complexity exists within each of these witnesses. Each of these witnesses contains multiple hierarchies. First and most obviously, they contain an ordered sequence of pages.

![rothwell-witnesses-folios]({{ site.baseurl }}/assets/images/rothwell-witnesses-folios.jpg)

These pages needed to be mapped both to the codex as a whole, but also to a second conceptual hierarchy that divides the work. Further these folio sides, recto and verso, need to be mapped to the digital facsimiles and library servers all over the world that serve these images.

Fortunately, for this kind of mapping there is a more general organizing standard called the International Image Interoperability Framework (IIIF) that we use to tie these resources together. We will see this mapping at work in a moment.

But it is tying these folios to the conceptual hierarchy unique to Sentences commentaries and mapping the hierarchy present in one commentary to the hierarchies present in another that is more difficult. However, this mapping is also the route by which we can present each commentary and each witness to each commentary within the context of the whole.

Let's turn then to conceptual hierarchies that structure the text found in each witness, and tie each commentary within the corpus together.

First, the Sentences themselves, as written by Peter Lombard, are divided into four books, focused on distinct subject matters. Later, these books were divided into distinctions by Alexander of Hales. These distinctions became customary focal points for sophisticated philosophical and theological debates that span centuries.

The organization within these distinctions (and sometime even at the distinction level) begins to vary as the tradition developed, which adds to the complexity of mapping connections. Thus, while we see chapter divisions in the Lombard text, we generally see questions and article divisions in the later commentaries.

The Rothwell example contains distinction divisions, and then question divisions, and finally within those questions we can identify paragraph units.

![hierarchy1]({{ site.baseurl }}/assets/images/hierarchy1.jpg)

Mapping this kind of hierarchy to a digitally encoded text is what will allow researchers to focus text searches on distinct books, distinctions, or questions. Merely having a transcription of the text is not yet enough to make these kinds of searches valuable. For example to search for the word "faith" in this commentary is going to give a user overwhelming results, and this is not a very big commentary. Imagine searching for that word throughout the entire corpus.

Because distinctions divide the text into discrete subject matters, researchers are typically interested in a few core distinctions that constitute the heart of their research. Distinction 1 for instance is famously about the nature of beatitude. A researcher might be interested in searching for discussions of faith in the context of debates about beatitude. Only after the conceptual hierarchy is mapped is this string search now possible, and not just for the Rothwell text, but for the entire corpus. A researcher could run a search for "faith" in all texts that are a part of book 1, distinction 1 and quickly see discussions in targeted locations spanning 5 centuries.

Mapping the conceptual hierarchy, moreover, is not only useful for targeted text search, but also for identifying relationships between commentaries and understanding a text's relationship within the larger tradition.

Rothwell, again, serves as a phenomenal example.

Rothwell's commentary is actually a special kind of commentary known as an "abbreviatio."

![hierarchy2]({{ site.baseurl }}/assets/images/hierarchy2.jpg)

It is a distilled compendium of another commentary written by Peter of Tarentaise, later Pope Innocent V.

![hierarchy3]({{ site.baseurl }}/assets/images/hierarchy3.jpg)

This means that it's full significance and contribution cannot be understood without first recognizing how it relates to the commentary by Tarentaise. Here a researcher might be interested in the nature of its abbreviation. What did Rothwell choose to include? What did he exclude? What did he change? How does this compare to other abbreviations?

Simply knowing that the Rothwell's commentary is an abbreviation of the Tarentaise commentary is not yet enough to build an environment that helps researchers quickly and efficiently ask these questions. The parallels with the commentary need to be mapped at a more granular level (ideally the most granular possible).

But where the parallels happen is not always predictable.

The abbreviation of Adam Wodeham's commentary by the late 14th century thinker Henry Totting of Oyta closely parallels the original at the paragraph level. With few exceptions each paragraph in the original text can be mapped to a shortened abbreviated paragraph. Occasionally, a paragraph in the original cannot be found in the abbreviated form and occasionally an abbreviated paragraph cannot be found in the original. These latter additions are particularly exciting because they show insertion and creation on the part of the abbreviator. But they cannot be found (and re-found by new readers) unless we have a system that allows us to link paragraphs and sections together from distinct commentaries.

But Rothewell's commentary differs from the abbreviatio of Wodeham's text in that the abbreviation is much more extensive, such that paragraph parallels can no longer be found. However, once we have mapped the entire hierarchy of each commentary, we can still map parallels at whatever level they occur.

![hierarchy4]({{ site.baseurl }}/assets/images/hierarchy4.jpg)

This connection allows us to create an environment that could automatically alert a reader reading a question within Rothwell's commentary that this particular question is an abbreviation of a much longer article. Furthermore, a reading application could be programmed to allow the reader to request the original expanded text and to view it alongside the text in Rothwell's commentary. (We will see this in a moment.) Again, these relationships can also be inverted so a user could be reading an article in Peter of Tarentaise's commentary and be alerted to the fact that an abbreviation of this text exists and—because each section with the hierarchy has a unique de-referenceable id—he or she could request to view a fragment of the related text alongside the full text.

Moving forward, it should be known that relationships of abbreviation only scratch the surface of the way *Sentences* commentaries are inter-connected.

![hierarchy5]({{ site.baseurl }}/assets/images/hierarchy5.jpg)

They might also be related by referencing or citing a common authority, like the Bible or Augustine.

Two paragraphs in two distinct commentaries might both be quoting or referencing the same Bible verse. Therefore, while reading a paragraph in Rothwell, a reading environment could alert the reader to another paragraph in other commentaries that have also quoted or referenced this Bible verse.

On the flip side, a researcher might be interested in the medieval interpretation of a particular Bible verse. This person could query the database for all commentaries that cite this verse and then filter this information using the conceptual hierarchy already mapped. They could for looking for instances of a particular verse in select books or distinctions where they might expect the verse to appear. Or they might look for anomalies, by looking for instances of that verse that appear outside an expected section of the text. And again someone might full-text search only those paragraphs where a given verse appears. The list of possibilities goes on.

Similar kinds of searches and filtering based on quotations can be also used for names, titles mentions, or subject tags.

Besides the "abbreviatio" relationship, commentaries within the corpus are also frequently linked by their references to one another. Sometimes these references are through direct quotations, but sometimes they are more general references to full paragraphs or entire questions.

![hierarchy6]({{ site.baseurl }}/assets/images/hierarchy6.jpg)

You can see how the chain of discovery for a reader of Rothwell might open up. Upon reading a question in Rothwell's commentary, one could be directed to the article it abbreviates in Peter of Tarentaise's commentary. In this text they might find references to Bonaventure's commentary that Rothwell's abbreviatio depends on for meaning but cut because of its abbreviated nature.

Finally, we should try not to lose sight of the fact that all of these commentaries take their original inspiration from Lombard, and therefore ultimately make references back to him, whether through oblique references or through directly quoting Lombard.

![hierarchy7]({{ site.baseurl }}/assets/images/hierarchy7.jpg)

But once these links are made, this also means that a reading environment could help readers trace connections across 5 centuries from a given passage in Lombard's text to the various ways that passage has been quoted, referenced, and discussed through the history of the tradition.

In the end, this kind of organization leads to a highly complex web (dramatically simplified here for purposes of illustration).

![web]({{ site.baseurl }}/assets/images/web.jpg)

In sum, this web allow users and applications, working in tandem, to follow that web in multiple directions to discover existing connections, to read and study the text in a more informative context, and hopefully to make new connections.
<h3>A Note on the Value of Collaborative Discovery</h3>
Before moving to a few demonstrations, I'd like to address a (sometimes) common criticism of DH, which is that DH projects don't discover new things, but merely tell us what we already know.

While I would dispute the totalizing claims of this criticism, let me just concede it for a moment and address why this criticism still misses the point. In our case here, it is true that most of the direct connections, quotations, references, and names linked at some point in the editorial process have to be identified by an individual editor and tagged.

However, the primary problem today is that (if we're lucky) the knowing editor will write this down in a footnote somewhere, which then becomes isolated and silo-ed in a book and is never linked up to the work being done by other scholars. Likewise, because there are many kinds of relationships whose expression the printed text does not accommodate, this information simply does not get shared.

If we could link all this work together, it would be possible to combine what individual editors know in isolation and discover what we know collectively.

Let me for a moment try to help you see this in action.

![Screen-Shot-2015-09-07-at-1.03.42-PM]({{ site.baseurl }}/assets/images/Screen-Shot-2015-09-07-at-1.03.42-PM.png)

What you see here is a little program I have written that is effectively crawling thousands of discrete texts and millions of Latin words submitted by editors of all stripes: editors in Berlin, Bogota, and even undergraduates at my own university. These texts are submitted to a central repository, or the *Sentences Commentary Text Archive*, and this script crawls each text and effectively draws machine-readable connections between them.

So for example it's not only collecting information about a text that refers to another text (something that might appear in a traditional footnote), it is also documenting the logical inverse of that relationship, i.e. that such and such a paragraph was referencedBy this text. It's doing the same for the use of quotations, bible verses, and importantly in the case of Rothwell and Adam Wodeham it is recording the relationship of abbreviated paragraphs to paragraphs which have been abbreviated (i.e. paragraphs with the property "abbreviatedBy").

## Using these mapped relationships to build a reading environment.

Now let's focus on a few slides that represent early development of a reading environment that really alerts the reader to the kind of mapped connections discussed above.

First, we might look quickly at the ways we can view the images of the individual witnesses of this text.

![Screen-Shot-2015-09-10-at-9.06.05-PM]({{ site.baseurl }}/assets/images/Screen-Shot-2015-09-10-at-9.06.05-PM.png)

View these comparisons live: [http://mirador.scta.info/#b653ab58-885e-4e17-b758-4874c052fb98](http://mirador.scta.info/#b653ab58-885e-4e17-b758-4874c052fb98)

Here we can bring the witnesses from Aarau, Copenhagen, and Philadelphia side by side.

We can also bring together witnesses of the Rothwell text and the Peter of Tarentaise text different image servers.

![Screen-Shot-2015-06-10-at-12.46.19-PM]({{ site.baseurl }}/assets/images/Screen-Shot-2015-06-10-at-12.46.19-PM.png)

Second, we might look at the Rothwell text itself.

![Screen-Shot-2015-09-07-at-8.41.40-AM]({{ site.baseurl }}/assets/images/Screen-Shot-2015-09-07-at-8.41.40-AM.png)

Here we've requested information about paragraph 3, and we learn that this entire paragraph is an abbreviation of article 3 of Peter of Tarentaise's commentary. If we click on view text in the left side panel, we can view that entire article without leaving the page.

The bottom window has queried the database, identified where the referenced text is, and rendered it for layout. The title includes another link to move to the text itself.

If we click on that link we will be taken directly to the text of Peter of Tarentaise, where we can continue our investigation.

![Screen-Shot-2015-09-07-at-8.45.38-AM]({{ site.baseurl }}/assets/images/Screen-Shot-2015-09-07-at-8.45.38-AM.png)

Here we can read the full article and become interested in important paragraphs and discussions that the Rothwell text cut out. For example, we can request information about paragraph 31. Here we note that paragraph 31 references a quotation from Augustine and a passage from Lombard's <em>Sentences</em> itself. Again, we can request a quick view of that text in the bottom window or we can select to focus in on that text itself.

![Screen-Shot-2015-09-07-at-11.50.49-AM]({{ site.baseurl }}/assets/images/Screen-Shot-2015-09-07-at-11.50.49-AM.png)

Here we would be taken directly to paragraph 2 and we can learn further information, first we can discover that this paragraph quotes the very same quotation that the Tarentaise text referred to. We can also see that this information panel shows the inverse relationship, namely that it is referenced by the commentary of Tarentaise. Finally, we can see that another commentary, the commentary of Peter Gracilis, also references this text.

In short, the work of two separate editors has been collected through the RDF extraction process and combined into a single database.

Now imagine we reversed this investigation. Someone might be reading the text of Lombard and take an interest in this particular paragraph. By selecting the paragraph information list, they would get a list of every paragraph in every other commentary that quotes or references or discusses this paragraph. And without leaving the page they are on, they would be able to view the referring text with a simple click or they could jump to the text itself.

![Screen-Shot-2015-09-07-at-11.50.57-AM]({{ site.baseurl }}/assets/images/Screen-Shot-2015-09-07-at-11.50.57-AM.png)

![Screen-Shot-2015-09-07-at-11.51.02-AM]({{ site.baseurl }}/assets/images/Screen-Shot-2015-09-07-at-11.51.02-AM.png)
