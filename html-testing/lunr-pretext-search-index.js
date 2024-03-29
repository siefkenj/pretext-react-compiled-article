var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "testing-document-2",
  "level": "1",
  "url": "testing-document-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Robert A. Beezer  University of Puget Sound     "
},
{
  "id": "test-1",
  "level": "1",
  "url": "test-1.html",
  "type": "Chapter",
  "number": "1",
  "title": "test-1",
  "body": " test-1  This chapter tests functionality of xref knowls and born-hidden knowls. We begin with a definition, so it can be xref-ed.    This is a definition that can be cross-referenced.    Now that we've made a definition, we can add a reference to it, like so: . Next we will add an example, whose solution will be a born-hidden knowl. We could also refer to it with an xref:     Find the derivatives of the following functions:  .  .  .         Recognize that is the composition of and . Remembering that , we have .       "
},
{
  "id": "test-1-def",
  "level": "2",
  "url": "test-1.html#test-1-def",
  "type": "Definition",
  "number": "1.0.1",
  "title": "",
  "body": "  This is a definition that can be cross-referenced.   "
},
{
  "id": "test-1-eg",
  "level": "2",
  "url": "test-1.html#test-1-eg",
  "type": "Example",
  "number": "1.0.2",
  "title": "",
  "body": "  Find the derivatives of the following functions:  .  .  .         Recognize that is the composition of and . Remembering that , we have .      "
},
{
  "id": "test-2",
  "level": "1",
  "url": "test-2.html",
  "type": "Chapter",
  "number": "2",
  "title": "test-2",
  "body": " test-2  In this chapter we want to check that the most recently clicked knowl is placed before any previously clicked knowls.   This is an exercise that has several answers, a solution, and a hint.   Here is a hint.   Here is the first answer.   Here is the second answer.   Here is the third answer.   Here is a solution.   "
},
{
  "id": "test-2-ex",
  "level": "2",
  "url": "test-2.html#test-2-ex",
  "type": "Checkpoint",
  "number": "2.0.1",
  "title": "",
  "body": " This is an exercise that has several answers, a solution, and a hint.   Here is a hint.   Here is the first answer.   Here is the second answer.   Here is the third answer.   Here is a solution.  "
},
{
  "id": "test-3",
  "level": "1",
  "url": "test-3.html",
  "type": "Chapter",
  "number": "3",
  "title": "test-3",
  "body": " test-3  In this chapter, we want to refer back to a definition in the middle of a calculation.  Consider the following calculation: .  "
},
{
  "id": "test-4",
  "level": "1",
  "url": "test-4.html",
  "type": "Chapter",
  "number": "4",
  "title": "test-4",
  "body": " test-4  In this chapter we want to test in-context links within knowls, such as , or .  In case we need it to work for an xref to something in the same chapter, consider below.    This is a theorem.    "
},
{
  "id": "test-4-thm",
  "level": "2",
  "url": "test-4.html#test-4-thm",
  "type": "Theorem",
  "number": "4.0.1",
  "title": "",
  "body": "  This is a theorem.   "
},
{
  "id": "test-5",
  "level": "1",
  "url": "test-5.html",
  "type": "Chapter",
  "number": "5",
  "title": "test-5",
  "body": " test-5  First, we will try adding several Sage cells that are meant to share variables. Since this is the default, we will just grab a few linked cells from another project. These cells run Python code. Probably that doesn't matter, but perhaps someone with proper Sage code would like to replace them.  The SymPy library contains the cholesky() algorithm. Note however that it produces a lower triangular matrix, rather than upper triangular. (That is, the output gives rather than , so you will have .) Let's give it a try. First, enter a positive-definite matrix.   Next, find the Cholesky factorization:    We will add one more Sage cell that is not linked to the ones above. Since it is not linked, computing the determinant of should fail, since it is not defined.   "
},
{
  "id": "test-6",
  "level": "1",
  "url": "test-6.html",
  "type": "Chapter",
  "number": "6",
  "title": "test-6",
  "body": " test-6  In this chapter, we add an aside, to see how that behaves.   An aside is like a marginal note. It contains some information that is useful, but not necessarily essential to the argument at hand.   That's all for this chapter.  "
},
{
  "id": "test-7",
  "level": "1",
  "url": "test-7.html",
  "type": "Chapter",
  "number": "7",
  "title": "test-7",
  "body": " test-7  In this chapter we will include a TikZ image, which should enlarge when clicked.   An image, for testing purposes.      "
},
{
  "id": "test-7-fig",
  "level": "2",
  "url": "test-7.html#test-7-fig",
  "type": "Figure",
  "number": "7.0.1",
  "title": "",
  "body": " An image, for testing purposes.     "
},
{
  "id": "test-8",
  "level": "1",
  "url": "test-8.html",
  "type": "Chapter",
  "number": "8",
  "title": "test-8",
  "body": " test-8  In this chapter we test whether a listing gets its code syntax-highlighted.   C Version of Hello, World!   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }     a = [0:0.5:5]; % A Matlab comment here b = 2*a.^2 + 3*a -5; c = 1.2*a.^2+4*a-3; subplot(1,2,1) plot(a,b,'-or','MarkerFaceColor','g','LineWidth',2) xlabel('X'); ylabel('Y'); legend('Curve ','Location','NorthWest') subplot(1,2,2) plot(a,c,'--ok','MarkerFaceColor','c','LineWidth',2) xlabel('X'); ylabel('Y'); legend('Curve 2','Location','NorthWest')   "
},
{
  "id": "test-8-listing-c",
  "level": "2",
  "url": "test-8.html#test-8-listing-c",
  "type": "Listing",
  "number": "8.0.1",
  "title": "",
  "body": " C Version of Hello, World!   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
