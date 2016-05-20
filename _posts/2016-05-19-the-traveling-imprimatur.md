---
layout: post
title:  The Traveling Imprimatur
date:   2016-05-19
---

# Introduction

In a [previous post](/the-dll-and-a-new-kind-of-peer-review/), I talked about the advantages of decoupling the *imprimatur* of scholarly review from any given presentational form. By attaching the *imprimatur* of scholarly review to the semantically encoded edition, we enable the re-use of a high quality editions in multiple, and often unanticipated, environments. We **also** provide mechanisms for these environments to easily alert end users to the status and quality of a given text. 

In this post, I want to engage in some speculative and conjectural work about what this kind of *traveling imprimatur* might look like and how it might get used. 

Since the [Digital Latin Library](http://digitallatin.org/) aims to support this kind of review and I see myself as someone in a position to use such a service, I describe here what I would like to see from the DLL and how I would use their service. *It should be noted that this is entirely a post about possibility. I do not speak on behalf of the DLL development team, but only as an interested user.*

# Creating a Badge Service 

In general, we have a great deal to learn from the open source software community. Many of the tools built in this community are translatable to the community of scholars working on semantically encoded editions. 

One kind of service that the open source community offers are testing platforms that aim to offer the same kind of quality control that we are interested in providing for text editions. 

Consider the "Continuous Integration Service" known as Travis-CI.

The specific details of how Travis CI works is not important for the moment. It is the concept that is important. Travis CI is testing platform for code. When Travis CI is finished testing (reviewing) a code base, it produces a report that looks something like the following:

![http://s3itch.paperplanes.de/statusimage_20140320_112129.jpg](http://s3itch.paperplanes.de/statusimage_20140320_112129.jpg)

This report is more or less equivalent to a reviewer's report that says this text meets certain quality standards. The report also provides a link to a *badge* which in our case could be equivalent to a *traveling imprimatur*. 

If the DLL (in collaboration with learned societies like the Medieval Academy of America) wants to manage the quality control of semantically encoded Latin editions, then it really is providing an analogous service that Travis CI provides for open source software. 

Let's imagine what an analogous, text focused, testing and badge service might look like. 

Suppose that Medieval Academy of America provides a written review of a particular edition, reaching the conclusion that it is a quality text. We could imagine, then, that the DLL might create an entry in a database for this particular review, with a unique id. 

A number of important pieces of metadata could then be associated with this review id. I imagine something like the following:

    {
        "review-id": "http://digitallatin.org/reviews/4a858a8cdef88",
        "review-metadata":
        {
            "reviewing-society": "Medieval Academy of America",
            "date": "2016-05-04",
            "level-approved": "print-ready",
            "badge-url": "http://digitallatin.org/badges/print-ready.png",
            "review-writeup": "http://digitallatin.org/4a858a8cdef88/text",
            "commit-id": "4848ade838a38a38",
            "version-number": "1.0.0",
            "author": "John Doe"
        }
    }

If the DLL review *imprimatur* were published like this, we would have a truly *traveling imprimatur* that any reading environment could use.

For example anyone could embed the badge image into the `readme.md` file of their open source edition in the following way:

    [![Print-Ready-Badge](http://digitallatin.org/badges/print-ready.png)](http://digitallatin.org/reviews/4a858a8cdef88)

This would generate something like the following:

![https://img.shields.io/wercker/ci/wercker/docs.svg](https://img.shields.io/wercker/ci/wercker/docs.svg)

But more than just giving the user a simply image. This badge would also be a hotlink that would take the user to the Digital Latin Library report page for this review, specified in the above file as `http://digitallatin.org/reviews/4a858a8cdef88`. 

>How many print only books can boast of this kind of transparency when it comes to review and quality control?!?

I imagine that the DLL could build a user friendly html page that would tell the user exactly what this badge means and what standards the learned society, such as the Medieval Academy of America, had in mind when it granted the *imprimatur* of "print-ready".

But further, through the magic of content negotiation and http headers, this same page could be used by an application requesting json data as follows:

    $ curl -iH "Accept: application/json" http://digitallatin.org/reviews/4a858a8cdef88

Now another application which knows the url of the review entry can parse this json information and provide the end user with clear and precise information about the review status of this text. 

# Examples of how a Badge Service Might be Used

Below are some examples of how third party applications could use this review report. When the *Sentences Commentary Text Archive* builds its database, it can check the `publicationStmt` of each TEI document to see if there is a link to a DLL review. If there is, it can send a request to the DLL server for the json data of the particular review in question. It can then grab the links to the DLL badge image and any other desired information. 

Then when the LombardPress client goes to display a list of available texts, it can use that information to inform an end user about status of a given text. This might look something like the following. 

![status list]({{ site.baseurl }}/assets/images/2016-05-19-traveling-imprimatur/use-of-badge-in-lbp-web.png)

Again, each of these badges is a hotlink that a user can follow to the official DLL review badge page and subsequently get precise information about the review and the standards used by the reviewers.

Further, the badge can easily be embedded in the readme.md file of any edition repository, so that the same information will be communicated to a user who encounters the text in a github repo. This might look something like the following:

![github-badge-example]({{ site.baseurl }}/assets/images/2016-05-19-traveling-imprimatur/github-badge-example.png)

Further, the need for a *traveling imprimatur* is all the more urgent because of some of the exciting collaboration possibilities now emerging for libraries and scholars. In my recent talk on [IIIF and Webmentions](/2016/04/16/iiif-webmentions/), I discussed how we can convert our encoded editions into IIIF annotation lists that can be read and displayed by any IIIF compliant image viewer. Webmentions are a means of alerting holding libraries to the available annotations lists that they could use in their own displays. But a critical question remains: how can libraries have confidence about the quality of this supplemental information and pass those quality indicators on to end users? With a *traveling imprimatur* we can pass the links to the badge image and DLL review report through the annotation lists so that this information can be passed on to end users. 

In such a case we might imagine a transformation from this instance that contains no quality indicators:

![mirador-annotations]({{ site.baseurl }}/assets/images/2016-04-16-iiif-webmentions/mirador_annotations.png)

to this, where each annotation has an associated badge or *traveling imprimatur*:

![mirador-annotations]({{ site.baseurl }}/assets/images/2016-05-19-traveling-imprimatur/mirador_annotations_with_badges.png)

Finally, since the metadata associated with each badge should point to the commit number of the precise version that was reviewed, we can include this version number (and perhaps also the review id) in the printed text. With this number a user can always identify the exact source text that was used to create this printed version of the text.

In the example below, we can see that in the top left header of the printed page, the user is pointed to the git commit numbers used to produce the text. The first number refers to the commit point in the source XML text used to produce this text. The second number (after the first + sign) refers to the precise version of the conversion script used to typeset this text. The third number (after the second + sign) refers to the precise version of the LaTeX encoding used to produce the final print version. 

![printed-page]({{ site.baseurl }}/assets/images/print-text-example.png)

Using these numbers, a user can not only always be sure that he or she is reading the reviewed text, but can also navigate back to these points in the XML text and conversion script and recreate the printed text if so desired. 
