var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  Cover Design  Covers 4 U    Production Editor  Vilma Mesa   Annual Edition 2015   abstract.pugetsound.edu  http:\/\/abstract.pugetsound.edu   copyright  "
},
{
  "id": "author-bio-TWJ",
  "level": "1",
  "url": "author-bio-TWJ.html",
  "type": "Author Biography",
  "number": "",
  "title": "Author Biography",
  "body": " Thomas W. Judson did his undergraduate work in Illinois, his graduate work in Oregon and presently teaches in Texas.  He likes to ride his bicycle in France, especially in the high Alps and Pyrenees on the roads of the Tour de France.  "
},
{
  "id": "author-bio-RAB",
  "level": "1",
  "url": "author-bio-RAB.html",
  "type": "Author Biography",
  "number": "",
  "title": "About Robert A. Beezer",
  "body": " About Robert A. Beezer  Rob Beezer designed, wrote, and tested the Sage exercises as a contribution to this open source project.  He also likes to ride his bicycle, and once rode with Tom Judson in the high Alps, in addition to some hiking there, up above the passes the cyclists ride.  "
},
{
  "id": "dedication",
  "level": "1",
  "url": "dedication.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": "  To students of algebra everywhere  they are the reason   And to those who teach them  "
},
{
  "id": "acknowledgement",
  "level": "1",
  "url": "acknowledgement.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " I would like to acknowledge the following reviewers for their helpful comments and suggestions.  David Anderson, University of Tennessee, Knoxville  Robert Beezer, University of Puget Sound  Myron Hood, California Polytechnic State University  Herbert Kasube, Bradley University  John Kurtzke, University of Portland  Inessa Levi, University of Louisville  Geoffrey Mason, University of California, Santa Cruz  Bruce Mericle, Mankato State University  Kimmo Rosenthal, Union College  Mark Teply, University of Wisconsin   I would also like to thank Steve Quigley, Marnie Pommett, Cathie Griffin, Kelle Karshick, and the rest of the staff at PWS Publishing for their guidance throughout this project. It has been a pleasure to work with them.   Robert Beezer encouraged me to make Abstract Algebra: Theory and Applications available as an open source textbook, a decision that I have never regretted. With his assistance, the book has been rewritten in PreTeXt ( ), making it possible to quickly output print, web, PDF versions and more from the same source. The open source version of this book has received support from the National Science Foundation (Award #DUE-1020957).  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This text is intended for a one or two-semester undergraduate course in abstract algebra. Traditionally, these courses have covered the theoretical aspects of groups, rings, and fields. However, with the development of computing in the last several decades, applications that involve abstract algebra and discrete mathematics have become increasingly important, and many science, engineering, and computer science students are now electing to minor in mathematics. Though theory still occupies a central role in the subject of abstract algebra and no student should go through such a course without a good notion of what a proof is, the importance of applications such as coding theory and cryptography has grown significantly.  Until recently most abstract algebra texts included few if any applications. However, one of the major problems in teaching an abstract algebra course is that for many students it is their first encounter with an environment that requires them to do rigorous proofs. Such students often find it hard to see the use of learning to prove theorems and propositions; applied examples help the instructor provide motivation.  This text contains more material than can possibly be covered in a single semester. Certainly there is adequate material for a two-semester course, and perhaps more; however, for a one-semester course it would be quite easy to omit selected chapters and still have a useful text. The order of presentation of topics is standard: groups, then rings, and finally fields. Emphasis can be placed either on theory or on applications. A typical one-semester course might cover groups and rings while briefly touching on field theory, using Chapters 1 through 6, 9, 10, 11, 13 (the first part), 16, 17, 18 (the first part), 20, and 21. Parts of these chapters could be deleted and applications substituted according to the interests of the students and the instructor. A two-semester course emphasizing theory might cover Chapters 1 through 6, 9, 10, 11, 13 through 18, 20, 21, 22 (the first part), and 23. On the other hand, if applications are to be emphasized, the course might cover Chapters 1 through 14, and 16 through 22. In an applied course, some of the more theoretical results could be assumed or omitted. A chapter dependency chart appears below. (A broken line indicates a partial dependency.) See the Table of Contents for more.  This real text has been used as the basis of a sample book for testing PreTeXt . So it is slowly migrating away from what the real book looks like and should not be construed as representative. For example, we have reduced the book to four chapters, broken into two parts, and . Indeed, that previous sentence was more an excuse to test some cross-references with parts in the structural case, such as this one to DeMoivre's Theorem, .      Though there are no specific prerequisites for a course in abstract algebra, students who have had other higher-level courses in mathematics will generally be more prepared than those who have not, because they will possess a bit more mathematical sophistication. Occasionally, we shall assume some basic linear algebra; that is, we shall take for granted an elementary knowledge of matrices and determinants. This should present no great problem, since most students taking a course in abstract algebra have been introduced to matrices and determinants elsewhere in their career, if they have not already taken a sophomore or junior-level course in linear algebra.  Exercise sections are the heart of any mathematics text. An exercise set appears at the end of each chapter. The nature of the exercises ranges over several categories; computational, conceptual, and theoretical problems are included. A section presenting hints and solutions to many of the exercises appears at the end of the text. Often in the solutions a proof is only sketched, and it is up to the student to provide the details. The exercises range in difficulty from very easy to very challenging. Many of the more substantial problems require careful thought, so the student should not be discouraged if the solution is not forthcoming after a few minutes of work.    There are additional exercises or computer projects at the ends of many of the chapters. The computer projects usually require a knowledge of programming. All of these exercises and projects are more substantial in nature and allow the exploration of new results and theory.   Sage ( ) is a free, open source, software system for advanced mathematics, which is ideal for assisting with a study of abstract algebra. Sage can be used either on your own computer, a local server, or on SageMathCloud ( ). Robert Beezer has written a comprehensive introduction to Sage and a selection of relevant exercises that appear at the end of each chapter, including live Sage cells in the web version of the book.   Thomas W. Judson  Nacogdoches, Texas 2015   "
},
{
  "id": "contributors",
  "level": "1",
  "url": "contributors.html",
  "type": "Preface",
  "number": "",
  "title": "Contributors to the 4<span class=\"process-math\">\\(^\\mathrm{th}\\)<\/span> Edition",
  "body": " Contributors to the 4 Edition  Many individuals have made this book possible. We will try to thank a few of them here, and hope we have not forgotten anybody really important.    Thomas Judson  Department of Mathematics and Statistics  Stephen F. Austin State University  judsontw@sfasu.edu    David Farmer  American Institute of Mathematics  farmer@aimath.org    Robert Beezer  Department of Mathematics and Computer Science  University of Puget Sound  Tacoma, Washington, USA  beezer@pugetsound.edu    Alex Jordan  Department of Mathematics  Portland Community College  Portland, OR  alex.jordan@pcc.edu    Thomas Judson  Department of Mathematics and Statistics  Stephen F. Austin State University  judsontw@sfasu.edu    David Farmer  American Institute of Mathematics  farmer@aimath.org    Robert Beezer  Department of Mathematics and Computer Science  University of Puget Sound  Tacoma, Washington, USA  beezer@pugetsound.edu    Alex Jordan  Department of Mathematics  Portland Community College  Portland, OR  alex.jordan@pcc.edu    Thomas Judson  Department of Mathematics and Statistics  Stephen F. Austin State University  judsontw@sfasu.edu    David Farmer  American Institute of Mathematics  farmer@aimath.org    Robert Beezer  Department of Mathematics and Computer Science  University of Puget Sound  Tacoma, Washington, USA  beezer@pugetsound.edu    Alex Jordan  Department of Mathematics  Portland Community College  Portland, OR  alex.jordan@pcc.edu    Thomas Judson  Department of Mathematics and Statistics  Stephen F. Austin State University  judsontw@sfasu.edu    David Farmer  American Institute of Mathematics  farmer@aimath.org    Robert Beezer  Department of Mathematics and Computer Science  University of Puget Sound  Tacoma, Washington, USA  beezer@pugetsound.edu    Alex Jordan  Department of Mathematics  Portland Community College  Portland, OR  alex.jordan@pcc.edu    Thomas Judson  Department of Mathematics and Statistics  Stephen F. Austin State University  judsontw@sfasu.edu    David Farmer  American Institute of Mathematics  farmer@aimath.org    Robert Beezer  Department of Mathematics and Computer Science  University of Puget Sound  Tacoma, Washington, USA  beezer@pugetsound.edu    Alex Jordan  Department of Mathematics  Portland Community College  Portland, OR  alex.jordan@pcc.edu    That's it. Thanks everybody.  "
},
{
  "id": "section-note-on-proofs",
  "level": "1",
  "url": "section-note-on-proofs.html",
  "type": "Section",
  "number": "1.1",
  "title": "A Short Note on Proofs",
  "body": " A Short Note on Proofs   Abstract mathematics is different from other sciences. In laboratory sciences such as chemistry and physics, scientists perform experiments to discover new principles and verify theories. Although mathematics is often motivated by physical experimentation or by computer simulations, it is made rigorous through the use of logical arguments. In studying abstract mathematics, we take what is called an axiomatic approach; that is, we take a collection of objects and assume some rules about their structure. These rules are called axioms . Using the axioms for , we wish to derive other information about by using logical arguments. We require that our axioms be consistent; that is, they should not contradict one another. We also demand that there not be too many axioms. If a system of axioms is too restrictive, there will be few examples of the mathematical structure.  A statement in logic or mathematics is an assertion that is either true or false. Consider the following examples:  .  All cats are black.  .  exactly when .  If and , then .  .  All but the first and last examples are statements, and must be either true or false.  A mathematical proof is nothing more than a convincing argument about the accuracy of a statement. Such an argument should contain enough detail to convince the audience; for instance, we can see that the statement exactly when is false by evaluating and noting that , an argument that would satisfy anyone. Of course, audiences may vary widely: proofs can be addressed to another student, to a professor, or to the reader of a text. If more detail than needed is presented in the proof, then the explanation will be either long-winded or poorly written. If too much detail is omitted, then the proof may not be convincing. Again it is important to keep the audience in mind. High school students require much more detail than do graduate students. A good rule of thumb for an argument in an introductory abstract algebra course is that it should be written to convince one's peers, whether those peers be other students or other readers of the text.  Let us examine different types of statements. A statement could be as simple as ; however, mathematicians are usually interested in more complex statements such as If , then , where and are both statements. If certain statements are known or assumed to be true, we wish to know what we can say about other statements. Here is called the hypothesis and is known as the conclusion . Consider the following statement: If and , then . The hypothesis is and ; the conclusion is . Notice that the statement says nothing about whether or not the hypothesis is true. However, if this entire statement is true and we can show that with is true, then the conclusion must be true. A proof of this statement might simply be a series of equations: .  If we can prove a statement true, then that statement is called a proposition . A proposition of major importance is called a theorem . Sometimes instead of proving a theorem or proposition all at once, we break the proof down into modules; that is, we prove several supporting propositions, which are called lemmas , and use the results of these propositions to prove the main result. If we can prove a proposition or a theorem, we will often, with very little effort, be able to derive other related propositions called corollaries .    Some Cautions and Suggestions  There are several different strategies for proving propositions. In addition to using different methods of proof, students often make some common mistakes when they are first learning how to prove theorems. To aid students who are studying abstract mathematics for the first time, we list here some of the difficulties that they may encounter and some of the strategies of proof available to them. It is a good idea to keep referring back to this list as a reminder. (Other techniques of proof will become apparent throughout this chapter and the remainder of the text.)  A theorem cannot be proved by example; however, the standard way to show that a statement is not a theorem is to provide a counterexample.  Quantifiers are important. Words and phrases such as only , for all , for every , and for some possess different meanings.  Never assume any hypothesis that is not explicitly stated in the theorem. You cannot take things for granted.  Suppose you wish to show that an object exists and is unique . First show that there actually is such an object. To show that it is unique, assume that there are two such objects, say and , and then show that .  Sometimes it is easier to prove the contrapositive of a statement. Proving the statement If , then is exactly the same as proving the statement If not , then not .  Although it is usually better to find a direct proof of a theorem, this task can sometimes be difficult. It may be easier to assume that the theorem that you are trying to prove is false, and to hope that in the course of your argument you are forced to make some statement that cannot possibly be true.   Remember that one of the main objectives of higher mathematics is proving theorems. Theorems are tools that make new and productive applications of mathematics possible. We use examples to give insight into existing theorems and to foster intuitions as to what new theorems might be true. Applications, examples, and proofs are tightly interconnected much more so than they may seem at first appearance.   "
},
{
  "id": "p-32",
  "level": "2",
  "url": "section-note-on-proofs.html#p-32",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "axioms "
},
{
  "id": "p-33",
  "level": "2",
  "url": "section-note-on-proofs.html#p-33",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "statement "
},
{
  "id": "p-40",
  "level": "2",
  "url": "section-note-on-proofs.html#p-40",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mathematical proof "
},
{
  "id": "p-41",
  "level": "2",
  "url": "section-note-on-proofs.html#p-41",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hypothesis conclusion "
},
{
  "id": "p-42",
  "level": "2",
  "url": "section-note-on-proofs.html#p-42",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proposition theorem lemmas corollaries "
},
{
  "id": "section-sets-and-equivalence-relations",
  "level": "1",
  "url": "section-sets-and-equivalence-relations.html",
  "type": "Section",
  "number": "1.2",
  "title": "Sets and Equivalence Relations",
  "body": " Sets and Equivalence Relations   Set Theory  A set is a well-defined collection of objects; that is, it is defined in such a manner that we can determine for any given object whether or not belongs to the set. The objects that belong to a set are called its elements or members . We will denote sets by capital letters, such as or ; if is an element of the set , we write . is in the set   A set is usually specified either by listing all of its elements inside a pair of braces or by stating the property that determines whether or not an object belongs to the set. We might write for a set containing elements or if each in satisfies a certain property . For example, if is the set of even positive integers, we can describe by writing either . We write when we want to say that 2 is in the set , and to say that is not in the set .  Some of the more important sets that we will consider are the following: .   the natural numbers    the integers    the rational numbers    the real numbers    the complex numbers   We can find various relations between sets as well as perform operations on sets. A set is a subset of , written or , if every element of is also an element of . is a subset of For example, and . Trivially, every set is a subset of itself. A set is a proper subset of a set if but . If is not a subset of , we write ; for example, . Two sets are equal , written , if we can show that and .  It is convenient to have a set with no elements in it. This set is called the empty set and is denoted by . Note that the empty set is a subset of every set. the empty set  To construct new sets out of old sets, we can perform certain operations: the union  of two sets and is defined as and the intersection of and is defined by . the union of sets and the intersection of sets and If and , then . We can consider the union and the intersection of more than two sets. In this case we write and for the union and intersection, respectively, of the sets .   When two sets have no elements in common, they are said to be disjoint ; for example, if is the set of even integers and is the set of odd integers, then and are disjoint. Two sets and are disjoint exactly when .  Sometimes we will work within one fixed set , called the universal set . For any set , we define the complement of , denoted by , to be the set complement of the set  .  We define the difference of two sets and to be difference between sets and  .   Set Operations  Let be the universal set and suppose that . Then .     Let , , and be sets. Then  , , and ;  and ;  and ;  and ;  ;  .     We will prove (1) and (3) and leave the remaining results to be proven in the exercises.  (1) Observe that .  Also, .  (3) For sets , , and ,  A similar argument proves that .     De Morgan's Laws  Augustus De Morgan, 1806 1871  De Morgan's laws for sets   Let and be sets. Then  ;  .     (1) We must show that and . Let . Then . So is neither in nor in , by the definition of the union of sets. By the definition of the complement, and . Therefore, and we have .  To show the reverse inclusion, suppose that . Then and , and so and . Thus and so . Hence, and so .  The proof of (2) is left as an exercise.     Other Relations on Sets  Other relations between sets often hold true. For example, . To see that this is true, observe that .     Cartesian Products and Mappings  Given sets and , we can define a new set , called the Cartesian product of and , as a set of ordered pairs. That is, Cartesian product of sets and  .   Cartesian Products  If , , and , then is the set and .   We define the Cartesian product of sets to be . If , we often write for (where would be written times). ( times) For example, the set consists of all of 3-tuples of real numbers.  Subsets of are called relations . We will define a mapping Mapping Function or function Function definition of  from a set to a set to be the special type of relation where if for every element there exists a unique element . Another way of saying this is that for every element in , assigns a unique element in . We usually write or . Instead of writing down ordered pairs , we write or . The set is called the domain Function domain of of and is called the range Function range of or image of . We can think of the elements in the function's domain as input values and the elements in the function's range as output values.   Mappings and relations          Mappings  Suppose and . In we define relations and from to . The relation is a mapping, but is not because is not assigned to a unique element in ; that is, and .   Given a function , it is often possible to write a list describing what the function does to each specific element in the domain. However, not all functions can be described in this manner. For example, the function that sends each real number to its cube is a mapping that must be described by writing or .  Consider the relation given by . We know that , but is or 2? This relation cannot be a mapping because it is not well-defined. A relation is well-defined Well-defined map if each element in the domain is assigned to a unique element in the range.  If is a map and the image of is , i.e., , then is said to be onto Function onto or surjective Function surjective . In other words, if there exists an for each such that , then is onto. A map is one-to-one Function one-to-one or injective Function injective if implies . Equivalently, a function is one-to-one if implies . A map that is both one-to-one and onto is called bijective Function bijective .    One-to-One and Onto Mappings  Let be defined by . Then is one-to-one but not onto. Define by where is a rational number expressed in its lowest terms with a positive denominator. The function is onto but not one-to-one.   Given two functions, we can construct a new function by using the range of the first function as the domain of the second function. Let and be mappings. Define a new map, the composition Function composition of of and from to , by .   Composition of maps        Composition of Mappings  Consider the functions and that are defined in (top). The composition of these functions, , is defined in (bottom).     Composition is not Commutative  Let and . Then and . In general, order makes a difference; that is, in most cases .    Some Mappings Commute  Sometimes it is the case that . Let and . Then and .    A Linear Map  Given a matrix , we can define a map by for in . This is actually matrix multiplication; that is, . Maps from to given by matrices are called linear maps or linear transformations Linear transformation definition of .    A Permutation  Suppose that . Define a map by . This is a bijective map. An alternative way to write is . For any set , a one-to-one and onto mapping is called a permutation Permutation definition of of .     Let , , and . Then  The composition of mappings is associative; that is, ;  If and are both one-to-one, then the mapping is one-to-one;  If and are both onto, then the mapping is onto;  If and are bijective, then so is .     We will prove (1) and (3). Part (2) is left as an exercise. Part (4) follows directly from (2) and (3).  (1) We must show that . For we have .  (3) Assume that and are both onto functions. Given , we must show that there exists an such that . However, since is onto, there is an element such that . Similarly, there is an such that . Accordingly, .    If is any set, we will use or to denote the identity mapping Function identity from to itself. Define this map by for all . A map is an inverse mapping of if and ; in other words, the inverse function of a function simply undoes the function. A map is said to be invertible Function invertible if it has an inverse. We usually write for the inverse of . identity mapping inverse of the function   An Inverse Function  The function has inverse by .    Exponential and Logarithmic Functions are Inverses  The natural logarithm and the exponential functions, and , are inverses of each other provided that we are careful about choosing domains. Observe that and whenever composition makes sense.    A Matrix Inverse Yields an Inverse of a Linear Map  Suppose that . Then defines a map from to by . We can find an inverse map of by simply inverting the matrix ; that is, . In this example, and hence, the inverse map is given by . It is easy to check that . Not every map has an inverse. If we consider the map given by the matrix , then an inverse map would have to be of the form and for all and . Clearly this is impossible because might not be 0.    An Inverse Permutation  Given the permutation on , it is easy to see that the permutation defined by is the inverse of . In fact, any bijective mapping possesses an inverse, as we will see in the next theorem.     A mapping is invertible if and only if it is both one-to-one and onto.    Suppose first that is invertible with inverse . Then is the identity map; that is, . If with , then . Consequently, is one-to-one. Now suppose that . To show that is onto, it is necessary to find an such that , but with . Let .  Conversely, let be bijective and let . Since is onto, there exists an such that . Because is one-to-one, must be unique. Define by letting . We have now constructed the inverse of .      Equivalence Relations and Partitions  A fundamental notion in mathematics is that of equality. We can generalize equality with equivalence relations and equivalence classes. An equivalence relation Equivalence relation on a set is a relation such that  for all ( reflexive property );  implies ( symmetric property );  and imply ( transitive property ).   Given an equivalence relation on a set , we usually write instead of . If the equivalence relation already has an associated notation such as , , or , we will use that notation.   Equivalent Fractions  Let , , , and be integers, where and are nonzero. Define if . Clearly is reflexive and symmetric. To show that it is also transitive, suppose that and , with , , and all nonzero. Then and . Therefore, . Since , . Consequently, .    An Equivalence Relation From Derivatives  Suppose that and are differentiable functions on . We can define an equivalence relation on such functions by letting if . It is clear that is both reflexive and symmetric. To demonstrate transitivity, suppose that and . From calculus we know that and , where and are both constants. Hence, and . Therefore, .    Equivalent Circles  For and in , define if . Then is an equivalence relation on .    Equivalent Matrices  Let and be matrices with entries in the real numbers. We can define an equivalence relation on the set of matrices, by saying if there exists an invertible matrix such that . For example, if , then since for . Let be the identity matrix; that is, . Then ; therefore, the relation is reflexive. To show symmetry, suppose that . Then there exists an invertible matrix such that . So . Finally, suppose that and . Then there exist invertible matrices and such that and . Since , the relation is transitive. Two matrices that are equivalent in this manner are said to be similar Matrix similar .   A partition Partitions  of a set is a collection of nonempty sets such that for and . Let be an equivalence relation on a set and let . Then is called the equivalence class Equivalence class of . We will see that an equivalence relation gives rise to a partition via equivalence classes. Also, whenever a partition of a set exists, there is some natural underlying equivalence relation, as the following theorem demonstrates.    Given an equivalence relation on a set , the equivalence classes of form a partition of . Conversely, if is a partition of a set , then there is an equivalence relation on with equivalence classes .    Suppose there exists an equivalence relation on the set . For any , the reflexive property shows that and so is nonempty. Clearly . Now let . We need to show that either or . Suppose that the intersection of and is not empty and that . Then and . By symmetry and transitivity ; hence, . Similarly, and so . Therefore, any two equivalence classes are either disjoint or exactly the same.  Conversely, suppose that is a partition of a set . Let two elements be equivalent if they are in the same partition. Clearly, the relation is reflexive. If is in the same partition as , then is in the same partition as , so implies . Finally, if is in the same partition as and is in the same partition as , then must be in the same partition as , and transitivity holds.      Two equivalence classes of an equivalence relation are either disjoint or equal.    Let us examine some of the partitions given by the equivalence classes in the last set of examples.   A Partition of Fractions  In the equivalence relation in , two pairs of integers, and , are in the same equivalence class when they reduce to the same fraction in its lowest terms.    A Partition of Functions  In the equivalence relation in , two functions and are in the same partition when they differ by a constant.    A Partition of Circles  We defined an equivalence class on by if . Two pairs of real numbers are in the same partition when they lie on the same circle about the origin.    A Partition of Integers  Let and be two integers and suppose that . We say that is congruent Congruence modulo to  modulo  , or is congruent to mod , if is evenly divisible by ; that is, for some . In this case we write . is congruent to modulo For example, since is divisible by 8. We claim that congruence modulo forms an equivalence relation of . Certainly any integer is equivalent to itself since is divisible by . We will now show that the relation is symmetric. If , then is divisible by . So is divisible by and . Now suppose that and . Then there exist integers and such that and . To show transitivity, it is necessary to prove that is divisible by . However, , and so is divisible by .  If we consider the equivalence relation established by the integers modulo 3, then .  Notice that and also that the sets are disjoint. The sets , , and form a partition of the integers.  The integers modulo are a very important example in the study of abstract algebra and will become quite useful in our investigation of various algebraic structures such as groups and rings. In our discussion of the integers modulo we have actually assumed a result known as the division algorithm, which will be stated and proved in .    "
},
{
  "id": "p-51",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-51",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set elements members "
},
{
  "id": "p-54",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-54",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subset proper subset equal "
},
{
  "id": "p-55",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-55",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "empty set "
},
{
  "id": "p-56",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-56",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "union intersection "
},
{
  "id": "p-57",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-57",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "disjoint "
},
{
  "id": "p-58",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-58",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "universal set complement "
},
{
  "id": "p-59",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-59",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "difference "
},
{
  "id": "example-sets-operations",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-operations",
  "type": "Example",
  "number": "1.2.1",
  "title": "Set Operations.",
  "body": " Set Operations  Let be the universal set and suppose that . Then .  "
},
{
  "id": "proposition-1",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#proposition-1",
  "type": "Proposition",
  "number": "1.2.2",
  "title": "",
  "body": "  Let , , and be sets. Then  , , and ;  and ;  and ;  and ;  ;  .     We will prove (1) and (3) and leave the remaining results to be proven in the exercises.  (1) Observe that .  Also, .  (3) For sets , , and ,  A similar argument proves that .   "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#theorem-1",
  "type": "Theorem",
  "number": "1.2.3",
  "title": "De Morgan’s Laws.",
  "body": " De Morgan's Laws  Augustus De Morgan, 1806 1871  De Morgan's laws for sets   Let and be sets. Then  ;  .     (1) We must show that and . Let . Then . So is neither in nor in , by the definition of the union of sets. By the definition of the complement, and . Therefore, and we have .  To show the reverse inclusion, suppose that . Then and , and so and . Thus and so . Hence, and so .  The proof of (2) is left as an exercise.   "
},
{
  "id": "example-sets-other-relations",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-other-relations",
  "type": "Example",
  "number": "1.2.4",
  "title": "Other Relations on Sets.",
  "body": " Other Relations on Sets  Other relations between sets often hold true. For example, . To see that this is true, observe that .  "
},
{
  "id": "p-80",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-80",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cartesian product "
},
{
  "id": "example-sets-cartesian-products",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-cartesian-products",
  "type": "Example",
  "number": "1.2.5",
  "title": "Cartesian Products.",
  "body": " Cartesian Products  If , , and , then is the set and .  "
},
{
  "id": "p-82",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-82",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cartesian product of sets "
},
{
  "id": "p-83",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-83",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relations mapping function domain range image "
},
{
  "id": "figure-sets-mappings",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#figure-sets-mappings",
  "type": "Figure",
  "number": "1.2.6",
  "title": "",
  "body": " Mappings and relations        "
},
{
  "id": "example-sets-mappings",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-mappings",
  "type": "Example",
  "number": "1.2.7",
  "title": "Mappings.",
  "body": " Mappings  Suppose and . In we define relations and from to . The relation is a mapping, but is not because is not assigned to a unique element in ; that is, and .  "
},
{
  "id": "p-86",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-86",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "well-defined "
},
{
  "id": "p-87",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-87",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "onto surjective one-to-one injective bijective "
},
{
  "id": "example-sets-one-to-one-onto",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-one-to-one-onto",
  "type": "Example",
  "number": "1.2.8",
  "title": "One-to-One and Onto Mappings.",
  "body": " One-to-One and Onto Mappings  Let be defined by . Then is one-to-one but not onto. Define by where is a rational number expressed in its lowest terms with a positive denominator. The function is onto but not one-to-one.  "
},
{
  "id": "p-89",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-89",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "composition "
},
{
  "id": "figure-sets-composition",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#figure-sets-composition",
  "type": "Figure",
  "number": "1.2.9",
  "title": "",
  "body": " Composition of maps      "
},
{
  "id": "example-sets-composition",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-composition",
  "type": "Example",
  "number": "1.2.10",
  "title": "Composition of Mappings.",
  "body": " Composition of Mappings  Consider the functions and that are defined in (top). The composition of these functions, , is defined in (bottom).  "
},
{
  "id": "example-sets-composition-noncommute",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-composition-noncommute",
  "type": "Example",
  "number": "1.2.11",
  "title": "Composition is not Commutative.",
  "body": " Composition is not Commutative  Let and . Then and . In general, order makes a difference; that is, in most cases .  "
},
{
  "id": "example-sets-composition-commute",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-composition-commute",
  "type": "Example",
  "number": "1.2.12",
  "title": "Some Mappings Commute.",
  "body": " Some Mappings Commute  Sometimes it is the case that . Let and . Then and .  "
},
{
  "id": "example-sets-linear-map",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-linear-map",
  "type": "Example",
  "number": "1.2.13",
  "title": "A Linear Map.",
  "body": " A Linear Map  Given a matrix , we can define a map by for in . This is actually matrix multiplication; that is, . Maps from to given by matrices are called linear maps or linear transformations Linear transformation definition of .  "
},
{
  "id": "example-sets-permutation",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-permutation",
  "type": "Example",
  "number": "1.2.14",
  "title": "A Permutation.",
  "body": " A Permutation  Suppose that . Define a map by . This is a bijective map. An alternative way to write is . For any set , a one-to-one and onto mapping is called a permutation Permutation definition of of .  "
},
{
  "id": "theorem-2",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#theorem-2",
  "type": "Theorem",
  "number": "1.2.15",
  "title": "",
  "body": "  Let , , and . Then  The composition of mappings is associative; that is, ;  If and are both one-to-one, then the mapping is one-to-one;  If and are both onto, then the mapping is onto;  If and are bijective, then so is .     We will prove (1) and (3). Part (2) is left as an exercise. Part (4) follows directly from (2) and (3).  (1) We must show that . For we have .  (3) Assume that and are both onto functions. Given , we must show that there exists an such that . However, since is onto, there is an element such that . Similarly, there is an such that . Accordingly, .   "
},
{
  "id": "p-103",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-103",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity mapping inverse mapping invertible "
},
{
  "id": "example-sets-inverse-function",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-inverse-function",
  "type": "Example",
  "number": "1.2.16",
  "title": "An Inverse Function.",
  "body": " An Inverse Function  The function has inverse by .  "
},
{
  "id": "example-sets-exponential",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-exponential",
  "type": "Example",
  "number": "1.2.17",
  "title": "Exponential and Logarithmic Functions are Inverses.",
  "body": " Exponential and Logarithmic Functions are Inverses  The natural logarithm and the exponential functions, and , are inverses of each other provided that we are careful about choosing domains. Observe that and whenever composition makes sense.  "
},
{
  "id": "example-sets-inverse-matrix",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-inverse-matrix",
  "type": "Example",
  "number": "1.2.18",
  "title": "A Matrix Inverse Yields an Inverse of a Linear Map.",
  "body": " A Matrix Inverse Yields an Inverse of a Linear Map  Suppose that . Then defines a map from to by . We can find an inverse map of by simply inverting the matrix ; that is, . In this example, and hence, the inverse map is given by . It is easy to check that . Not every map has an inverse. If we consider the map given by the matrix , then an inverse map would have to be of the form and for all and . Clearly this is impossible because might not be 0.  "
},
{
  "id": "example-sets-inverse-permutation",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-inverse-permutation",
  "type": "Example",
  "number": "1.2.19",
  "title": "An Inverse Permutation.",
  "body": " An Inverse Permutation  Given the permutation on , it is easy to see that the permutation defined by is the inverse of . In fact, any bijective mapping possesses an inverse, as we will see in the next theorem.  "
},
{
  "id": "theorem-3",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#theorem-3",
  "type": "Theorem",
  "number": "1.2.20",
  "title": "",
  "body": "  A mapping is invertible if and only if it is both one-to-one and onto.    Suppose first that is invertible with inverse . Then is the identity map; that is, . If with , then . Consequently, is one-to-one. Now suppose that . To show that is onto, it is necessary to find an such that , but with . Let .  Conversely, let be bijective and let . Since is onto, there exists an such that . Because is one-to-one, must be unique. Define by letting . We have now constructed the inverse of .   "
},
{
  "id": "p-111",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-111",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalence relation reflexive property symmetric property transitive property "
},
{
  "id": "example-sets-equivalent-fractions",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-equivalent-fractions",
  "type": "Example",
  "number": "1.2.21",
  "title": "Equivalent Fractions.",
  "body": " Equivalent Fractions  Let , , , and be integers, where and are nonzero. Define if . Clearly is reflexive and symmetric. To show that it is also transitive, suppose that and , with , , and all nonzero. Then and . Therefore, . Since , . Consequently, .  "
},
{
  "id": "example-sets-equivalent-derivative",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-equivalent-derivative",
  "type": "Example",
  "number": "1.2.22",
  "title": "An Equivalence Relation From Derivatives.",
  "body": " An Equivalence Relation From Derivatives  Suppose that and are differentiable functions on . We can define an equivalence relation on such functions by letting if . It is clear that is both reflexive and symmetric. To demonstrate transitivity, suppose that and . From calculus we know that and , where and are both constants. Hence, and . Therefore, .  "
},
{
  "id": "example-sets-equivalent-circles",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-equivalent-circles",
  "type": "Example",
  "number": "1.2.23",
  "title": "Equivalent Circles.",
  "body": " Equivalent Circles  For and in , define if . Then is an equivalence relation on .  "
},
{
  "id": "example-sets-equivalent-matrices",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-equivalent-matrices",
  "type": "Example",
  "number": "1.2.24",
  "title": "Equivalent Matrices.",
  "body": " Equivalent Matrices  Let and be matrices with entries in the real numbers. We can define an equivalence relation on the set of matrices, by saying if there exists an invertible matrix such that . For example, if , then since for . Let be the identity matrix; that is, . Then ; therefore, the relation is reflexive. To show symmetry, suppose that . Then there exists an invertible matrix such that . So . Finally, suppose that and . Then there exist invertible matrices and such that and . Since , the relation is transitive. Two matrices that are equivalent in this manner are said to be similar Matrix similar .  "
},
{
  "id": "p-120",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#p-120",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partition equivalence class "
},
{
  "id": "theorem-4",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#theorem-4",
  "type": "Theorem",
  "number": "1.2.25",
  "title": "",
  "body": "  Given an equivalence relation on a set , the equivalence classes of form a partition of . Conversely, if is a partition of a set , then there is an equivalence relation on with equivalence classes .    Suppose there exists an equivalence relation on the set . For any , the reflexive property shows that and so is nonempty. Clearly . Now let . We need to show that either or . Suppose that the intersection of and is not empty and that . Then and . By symmetry and transitivity ; hence, . Similarly, and so . Therefore, any two equivalence classes are either disjoint or exactly the same.  Conversely, suppose that is a partition of a set . Let two elements be equivalent if they are in the same partition. Clearly, the relation is reflexive. If is in the same partition as , then is in the same partition as , so implies . Finally, if is in the same partition as and is in the same partition as , then must be in the same partition as , and transitivity holds.   "
},
{
  "id": "corollary-1",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#corollary-1",
  "type": "Corollary",
  "number": "1.2.26",
  "title": "",
  "body": "  Two equivalence classes of an equivalence relation are either disjoint or equal.   "
},
{
  "id": "example-sets-fraction-partition",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-fraction-partition",
  "type": "Example",
  "number": "1.2.27",
  "title": "A Partition of Fractions.",
  "body": " A Partition of Fractions  In the equivalence relation in , two pairs of integers, and , are in the same equivalence class when they reduce to the same fraction in its lowest terms.  "
},
{
  "id": "example-sets-matrix-partition",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-matrix-partition",
  "type": "Example",
  "number": "1.2.28",
  "title": "A Partition of Functions.",
  "body": " A Partition of Functions  In the equivalence relation in , two functions and are in the same partition when they differ by a constant.  "
},
{
  "id": "example-sets-circle-partition",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-circle-partition",
  "type": "Example",
  "number": "1.2.29",
  "title": "A Partition of Circles.",
  "body": " A Partition of Circles  We defined an equivalence class on by if . Two pairs of real numbers are in the same partition when they lie on the same circle about the origin.  "
},
{
  "id": "example-sets-congruent-integers",
  "level": "2",
  "url": "section-sets-and-equivalence-relations.html#example-sets-congruent-integers",
  "type": "Example",
  "number": "1.2.30",
  "title": "A Partition of Integers.",
  "body": " A Partition of Integers  Let and be two integers and suppose that . We say that is congruent Congruence modulo to  modulo  , or is congruent to mod , if is evenly divisible by ; that is, for some . In this case we write . is congruent to modulo For example, since is divisible by 8. We claim that congruence modulo forms an equivalence relation of . Certainly any integer is equivalent to itself since is divisible by . We will now show that the relation is symmetric. If , then is divisible by . So is divisible by and . Now suppose that and . Then there exist integers and such that and . To show transitivity, it is necessary to prove that is divisible by . However, , and so is divisible by .  If we consider the equivalence relation established by the integers modulo 3, then .  Notice that and also that the sets are disjoint. The sets , , and form a partition of the integers.  The integers modulo are a very important example in the study of abstract algebra and will become quite useful in our investigation of various algebraic structures such as groups and rings. In our discussion of the integers modulo we have actually assumed a result known as the division algorithm, which will be stated and proved in .  "
},
{
  "id": "sets-sage",
  "level": "1",
  "url": "sets-sage.html",
  "type": "Section",
  "number": "1.3",
  "title": "Sage",
  "body": " Sage   Sage is a powerful system for studying and exploring many different areas of mathematics. In this textbook, you will study a variety of algebraic structures, such as groups, rings and fields. Sage does an excellent job of implementing many features of these objects as we will see in the chapters ahead. But here and now, in this initial chapter, we will concentrate on a few general ways of getting the most out of working with Sage.  You may use Sage several different ways. It may be used as a command-line program when installed on your own computer. Or it might be a web application such as the SageMathCloud. Our writing will assume that you are reading this as a worksheet within the Sage Notebook (a web browser interface), or this is a section of the entire book presented as web pages, and you are employing the Sage Cell Server via those pages. After the first few chapters the explanations should work equally well for whatever vehicle you use to execute Sage commands.    Executing Sage Commands  Most of your interaction will be by typing commands into a compute cell . If you are reading this in the Sage Notebook or as a webpage version of the book, then you will see a compute cell just below this paragraph. Click once inside the compute cell and if you are in the Sage Notebook, you will get a more distinctive border around it, a blinking cursor inside, plus a cute little evaluate link below.   At the cursor, type 2+2 and then click on the evaluate link. Did a 4 appear below the cell? If so, you have successfully sent a command off for Sage to evaluate and you have received back the (correct) answer.  Here is another compute cell. Try evaluating the command factorial(300) here.   Hmmmmm. That is quite a big integer! If you see slashes at the end of each line, this means the result is continued onto the next line, since there are 615 total digits in the result.  To make new compute cells in the Sage Notebook (only), hover your mouse just above another compute cell, or just below some output from a compute cell. When you see a skinny blue bar across the width of your worksheet, click and you will open up a new compute cell, ready for input. Note that your worksheet will remember any calculations you make, in the order you make them, no matter where you put the cells, so it is best to stay organized and add new cells at the bottom.  Try placing your cursor just below the monstrous value of that you have. Click on the blue bar and try another factorial computation in the new compute cell.  Each compute cell will show output due to only the very last command in the cell. Try to predict the following output before evaluating the cell.     The following compute cell will not print anything since the one command does not create output. But it will have an effect, as you can see when you execute the subsequent cell. Notice how this uses the value of b from above. Execute this compute cell once . Exactly once. Even if it appears to do nothing. If you execute the cell twice, your credit card may be charged twice.   Now execute this cell, which will produce some output.   So b came into existence as 6 . We subtracted immediately afterward. Then a subsequent cell added 50 . This assumes you executed this cell exactly once! In the last cell we create b+20 (but do not save it) and it is this value ( ) that is output, while b is still .  You can combine several commands on one line with a semi-colon. This is a great way to get multiple outputs from a compute cell. The syntax for building a matrix should be somewhat obvious when you see the output, but if not, it is not particularly important to understand now.      Immediate Help  Some commands in Sage are functions, an example is factorial() above. Other commands are methods of an object and are like characteristics of objects, an example is .inverse() as a method of a matrix. Once you know how to create an object (such as a matrix), then it is easy to see all the available methods. Write the name of the object, place a period ( dot ) and hit the TAB key. If you have A defined from above, then the compute cell below is ready to go, click into it and then hit TAB (not evaluate !). You should get a long list of possible methods.   To get some help on how to use a method with an object, write its name after a dot (with no parentheses) and then use a question-mark and hit TAB. (Hit the escape key ESC to remove the list, or click on the text for a method.)   With one more question-mark and a TAB you can see the actual computer instructions that were programmed into Sage to make the method work, once you scoll down past the documentation delimited by the triple quotes ( \"\"\" ):   It is worthwhile to see what Sage does when there is an error. You will probably see a lot of these at first, and initially they will be a bit intimidating. But with time, you will learn how to use them effectively and you will also become more proficient with Sage and see them less often. Execute the compute cell below, it asks for the inverse of a matrix that has no inverse. Then reread the commentary.   Click just to the left of the error message to expand it fully (another click hides it totally, and a third click brings back the abbreviated form). Read the bottom of an error message first, it is your best explanation. Here a ZeroDivisionError is not 100% accurate, but is close. The matrix is not invertible, not dissimilar to how we cannot divide scalars by zero. The remainder of the message begins at the top showing were the error first happened in your code and then the various places where intermediate functions were called, until the actual piece of Sage where the problem occurred. Sometimes this information will give you some clues, sometimes it is totally undecipherable. So do not let it scare you if it seems mysterious, but do remember to always read the last line first, then go back and read the first few lines for something that looks like your code.    Annotating Your Work  It is easy to comment on your work when you use the Sage Notebook. (The following only applies if you are reading this within a Sage Notebook. If you are not, then perhaps you can go open up a worksheet in the Sage Notebook and experiment there.) You can open up a small word-processor by hovering your mouse until you get a skinny blue bar again, but now when you click, also hold the SHIFT key at the same time. Experiment with fonts, colors, bullet lists, etc and then click the Save changes button to exit. Double-click on your text if you need to go back and edit it later.  Open the word-processor again to create a new bit of text (maybe next to the empty compute cell just below). Type all of the following exactly :  Pythagorean Theorem: $c^2=a^2+b^2$  and save your changes. The symbols between the dollar signs are written according to the mathematical typesetting language known as tex  cruise the internet to learn more about this very popular tool. (Well, it is extremely popular among mathematicians and physical scientists.)     Lists  Much of our interaction with sets will be through Sage lists. These are not really sets they allow duplicates, and order matters. But they are so close to sets, and so easy and powerful to use that we will use them regularly. We will use a fun made-up list for practice, the quote marks mean the items are just text, with no special mathematical meaning. Execute these compute cells as we work through them.   So the square brackets define the boundaries of our list, commas separate items, and we can give the list a name. To work with just one element of the list, we use the name and a pair of brackets with an index. Notice that lists have indices that begin counting at zero . This will seem odd at first and will seem very natural later.   We can add a new creature to the zoo, it is joined up at the far right end.   We can remove a creature.   We can extract a sublist. Here we start with element 1 (the elephant) and go all the way up to, but not including , element 3 (the beetle). Again a bit odd, but it will feel natural later. For now, notice that we are extracting two elements of the lists, exactly elements.   Often we will want to see if two lists are equal. To do that we will need to sort a list first. A function creates a new, sorted list, leaving the original alone. So we need to save the new one with a new name.    Notice that if you run this last compute cell your zoo has changed and some commands above will not necessarily execute the same way. If you want to experiment, go all the way back to the first creation of the zoo and start executing cells again from there with a fresh zoo.  A construction called a list comprehension is especially powerful, especially since it almost exactly mirrors notation we use to describe sets. Suppose we want to form the plural of the names of the creatures in our zoo. We build a new list, based on all of the elements of our old list.   Almost like it says: we add an s to each animal name, for each animal in the zoo, and place them in a new list. Perfect. (Except for getting the plural of ostrich wrong.)    Lists of Integers  One final type of list, with numbers this time. The srange() function will create lists of integers. (The s in the name stands for Sage and so will produce integers that Sage understands best. Many early difficulties with Sage and group theory can be alleviated by using only this command to create lists of integers.) In its simplest form an invocation like srange(12) will create a list of 12 integers, starting at zero and working up to, but not including , 12. Does this sound familiar?   Here are two other forms, that you should be able to understand by studying the examples.      Saving and Sharing Your Work  There is a Save button in the upper-right corner of the Sage Notebook. This will save a current copy of your worksheet that you can retrieve your work from within your notebook again later, though you have to re-execute all the cells when you re-open the worksheet.  There is also a File drop-down list, on the left, just above your very top compute cell (not be confused with your browser's File menu item!). You will see a choice here labeled Save worksheet to a file... When you do this, you are creating a copy of your worksheet in the sws format (short for Sage WorkSheet ). You can email this file, or post it on a website, for other Sage users and they can use the Upload link on the homepage of their notebook to incorporate a copy of your worksheet into their notebook.  There are other ways to share worksheets that you can experiment with, but this gives you one way to share any worksheet with anybody almost anywhere.  We have covered a lot here in this section, so come back later to pick up tidbits you might have missed. There are also many more features in the Sage Notebook that we have not covered.   "
},
{
  "id": "p-162",
  "level": "2",
  "url": "sets-sage.html#p-162",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "list comprehension "
},
{
  "id": "exercises-sets",
  "level": "1",
  "url": "exercises-sets.html",
  "type": "Exercises",
  "number": "1.4",
  "title": "Exercises",
  "body": " Exercises   Warm-up   This is a meaningless subdivision of the exercises for the sake of testing output.    Suppose that  Describe each of the following sets.          If , , , and , list all of the elements in each of the following sets.         (a) ; (d) .    Find an example of two nonempty sets and for which is true.    Prove and .    Prove and .    Prove .   If , then either or . Thus, and . Hence, . Therefore, . Conversely, if , then and . Thus, or is in both and . So and therefore . Hence, .    Prove .    Prove if and only if .    Prove .    Prove .   .    Prove .    Prove .    Prove .    Prove .   .     More Exercises   This is a meaningless subdivision of the exercises for the sake of testing output.    Prove .    Prove .    Which of the following relations define a mapping? In each case, supply a reason why is or is not a mapping.          Determine which of the following functions are one-to-one and which are onto. If the function is not onto, determine its range.   defined by  defined by  defined by  defined by    (a) is one-to-one but not onto. . (c) is neither one-to-one nor onto. .    Let and be invertible mappings; that is, mappings such that and exist. Show that .     Define a function that is one-to-one but not onto.  Define a function that is onto but not one-to-one.    (a) .    Prove the relation defined on by if is an equivalence relation.    Let and be maps.   If and are both one-to-one functions, show that is one-to-one.  If is onto, show that is onto.  If is one-to-one, show that is one-to-one.  If is one-to-one and is onto, show that is one-to-one.  If is onto and is one-to-one, show that is onto.    (a) Let . Then . Thus, and , so is one-to-one. (b) Let , then for some . Since , is onto.    Define a function on the real numbers by What are the domain and range of ? What is the inverse of ? Compute and .    Let be a map with and .   Prove .  Prove . Give an example in which equality fails.  Prove , where  Prove .  Prove .    (a) Let . Then there exists an such that . Hence, or . Therefore, . Consequently, . Conversely, if , then or . Hence, there exists an or there exists an such that . Thus, there exists an such that . Therefore, , and .    Determine whether or not the following relations are equivalence relations on the given set. If the relation is an equivalence relation, describe the partition given by it. If the relation is not an equivalence relation, state why it fails to be one.   in if  in if  in if  in if     Define a relation on by stating that if and only if . Show that is reflexive and transitive but not symmetric.    Show that an matrix gives rise to a well-defined map from to .    Find the error in the following argument by providing a counterexample. The reflexive property is redundant in the axioms for an equivalence relation. If , then by the symmetric property. Using the transitive property, we can deduce that .    Let and define if .   Projective Real Line  Define a relation on by letting if there exists a nonzero real number such that . Prove that defines an equivalence relation on . What are the corresponding equivalence classes? This equivalence relation defines the projective line, denoted by , which is very important in geometry.    "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "exercises-sets.html#exercise-1",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": " Suppose that  Describe each of the following sets.        "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "exercises-sets.html#exercise-2",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": " If , , , and , list all of the elements in each of the following sets.         (a) ; (d) .  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "exercises-sets.html#exercise-3",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": " Find an example of two nonempty sets and for which is true.  "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "exercises-sets.html#exercise-4",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": " Prove and .  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "exercises-sets.html#exercise-5",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": " Prove and .  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "exercises-sets.html#exercise-6",
  "type": "Exercise",
  "number": "1.4.6",
  "title": "",
  "body": " Prove .   If , then either or . Thus, and . Hence, . Therefore, . Conversely, if , then and . Thus, or is in both and . So and therefore . Hence, .  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "exercises-sets.html#exercise-7",
  "type": "Exercise",
  "number": "1.4.7",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "exercises-sets.html#exercise-8",
  "type": "Exercise",
  "number": "1.4.8",
  "title": "",
  "body": " Prove if and only if .  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "exercises-sets.html#exercise-9",
  "type": "Exercise",
  "number": "1.4.9",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "exercises-sets.html#exercise-10",
  "type": "Exercise",
  "number": "1.4.10",
  "title": "",
  "body": " Prove .   .  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "exercises-sets.html#exercise-11",
  "type": "Exercise",
  "number": "1.4.11",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "exercises-sets.html#exercise-12",
  "type": "Exercise",
  "number": "1.4.12",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "exercises-sets.html#exercise-13",
  "type": "Exercise",
  "number": "1.4.13",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "exercises-sets.html#exercise-14",
  "type": "Exercise",
  "number": "1.4.14",
  "title": "",
  "body": " Prove .   .  "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "exercises-sets.html#exercise-15",
  "type": "Exercise",
  "number": "1.4.15",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "exercises-sets.html#exercise-16",
  "type": "Exercise",
  "number": "1.4.16",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "exercises-sets.html#exercise-17",
  "type": "Exercise",
  "number": "1.4.17",
  "title": "",
  "body": " Which of the following relations define a mapping? In each case, supply a reason why is or is not a mapping.        "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "exercises-sets.html#exercise-18",
  "type": "Exercise",
  "number": "1.4.18",
  "title": "",
  "body": " Determine which of the following functions are one-to-one and which are onto. If the function is not onto, determine its range.   defined by  defined by  defined by  defined by    (a) is one-to-one but not onto. . (c) is neither one-to-one nor onto. .  "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "exercises-sets.html#exercise-19",
  "type": "Exercise",
  "number": "1.4.19",
  "title": "",
  "body": " Let and be invertible mappings; that is, mappings such that and exist. Show that .  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "exercises-sets.html#exercise-20",
  "type": "Exercise",
  "number": "1.4.20",
  "title": "",
  "body": "  Define a function that is one-to-one but not onto.  Define a function that is onto but not one-to-one.    (a) .  "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "exercises-sets.html#exercise-21",
  "type": "Exercise",
  "number": "1.4.21",
  "title": "",
  "body": " Prove the relation defined on by if is an equivalence relation.  "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "exercises-sets.html#exercise-22",
  "type": "Exercise",
  "number": "1.4.22",
  "title": "",
  "body": " Let and be maps.   If and are both one-to-one functions, show that is one-to-one.  If is onto, show that is onto.  If is one-to-one, show that is one-to-one.  If is one-to-one and is onto, show that is one-to-one.  If is onto and is one-to-one, show that is onto.    (a) Let . Then . Thus, and , so is one-to-one. (b) Let , then for some . Since , is onto.  "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "exercises-sets.html#exercise-23",
  "type": "Exercise",
  "number": "1.4.23",
  "title": "",
  "body": " Define a function on the real numbers by What are the domain and range of ? What is the inverse of ? Compute and .  "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "exercises-sets.html#exercise-24",
  "type": "Exercise",
  "number": "1.4.24",
  "title": "",
  "body": " Let be a map with and .   Prove .  Prove . Give an example in which equality fails.  Prove , where  Prove .  Prove .    (a) Let . Then there exists an such that . Hence, or . Therefore, . Consequently, . Conversely, if , then or . Hence, there exists an or there exists an such that . Thus, there exists an such that . Therefore, , and .  "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "exercises-sets.html#exercise-25",
  "type": "Exercise",
  "number": "1.4.25",
  "title": "",
  "body": " Determine whether or not the following relations are equivalence relations on the given set. If the relation is an equivalence relation, describe the partition given by it. If the relation is not an equivalence relation, state why it fails to be one.   in if  in if  in if  in if   "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "exercises-sets.html#exercise-26",
  "type": "Exercise",
  "number": "1.4.26",
  "title": "",
  "body": " Define a relation on by stating that if and only if . Show that is reflexive and transitive but not symmetric.  "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "exercises-sets.html#exercise-27",
  "type": "Exercise",
  "number": "1.4.27",
  "title": "",
  "body": " Show that an matrix gives rise to a well-defined map from to .  "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "exercises-sets.html#exercise-28",
  "type": "Exercise",
  "number": "1.4.28",
  "title": "",
  "body": " Find the error in the following argument by providing a counterexample. The reflexive property is redundant in the axioms for an equivalence relation. If , then by the symmetric property. Using the transitive property, we can deduce that .    Let and define if .  "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "exercises-sets.html#exercise-29",
  "type": "Exercise",
  "number": "1.4.29",
  "title": "Projective Real Line.",
  "body": "Projective Real Line  Define a relation on by letting if there exists a nonzero real number such that . Prove that defines an equivalence relation on . What are the corresponding equivalence classes? This equivalence relation defines the projective line, denoted by , which is very important in geometry.  "
},
{
  "id": "sets-sage-exercises",
  "level": "1",
  "url": "sets-sage-exercises.html",
  "type": "Exercises",
  "number": "1.5",
  "title": "Sage Exercises",
  "body": " Sage Exercises   This exercise is just about making sure you know how to use Sage. Login to a Sage Notebook server and create a new worksheet. Do some non-trivial computation, maybe a pretty plot or some gruesome numerical computation to an insane precision. Create an interesting list and experiment with it some. Maybe include some nicely formatted text or tex using the included mini-word-processor of the Sage Notebook (hover until a blue bar appears between cells and then shift-click).  Use whatever mechanism your instructor has in place for submitting your work. Or save your worksheet and then trade worksheets via email (or another electronic method) with a classmate.   "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "sets-sage-exercises.html#exercise-30",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": " This exercise is just about making sure you know how to use Sage. Login to a Sage Notebook server and create a new worksheet. Do some non-trivial computation, maybe a pretty plot or some gruesome numerical computation to an insane precision. Create an interesting list and experiment with it some. Maybe include some nicely formatted text or tex using the included mini-word-processor of the Sage Notebook (hover until a blue bar appears between cells and then shift-click).  Use whatever mechanism your instructor has in place for submitting your work. Or save your worksheet and then trade worksheets via email (or another electronic method) with a classmate.  "
},
{
  "id": "references-1",
  "level": "1",
  "url": "references-1.html",
  "type": "References",
  "number": "1.6",
  "title": "References and Suggested Readings",
  "body": " References and Suggested Readings     Artin, M. Abstract Algebra . 2nd ed. Pearson, Upper Saddle River, NJ, 2011.    Childs, L. A Concrete Introduction to Higher Algebra . 2nd ed. Springer-Verlag, New York, 1995.    Dummit, D. and Foote, R. Abstract Algebra . 3rd ed. Wiley, New York, 2003.    Ehrlich, G. Fundamental Concepts of Algebra . PWS-KENT, Boston, 1991.    Fraleigh, J. B. A First Course in Abstract Algebra . 7th ed. Pearson, Upper Saddle River, NJ, 2003.    Gallian, J. A. Contemporary Abstract Algebra . 7th ed. Brooks\/Cole, Belmont, CA, 2009.    Halmos, P. Naive Set Theory . Springer, New York, 1991. One of the best references for set theory.    Herstein, I. N. Abstract Algebra . 3rd ed. Wiley, New York, 1996.    Hungerford, T. W. Algebra . Springer, New York, 1974. One of the standard graduate algebra texts.    Lang, S. Algebra . 3rd ed. Springer, New York, 2002. Another standard graduate text.    Lidl, R. and Pilz, G. Applied Abstract Algebra . 2nd ed. Springer, New York, 1998.    Mackiw, G. Applications of Abstract Algebra . Wiley, New York, 1985.   Nickelson, W. K.  Introduction to Abstract Algebra . 3rd ed. Wiley, New York, 2006.    Solow, D. How to Read and Do Proofs . 5th ed. Wiley, New York, 2009.    van der Waerden, B. L. A History of Algebra . Springer-Verlag, New York, 1985. An account of the historical development of algebra.  "
},
{
  "id": "section-math-induction",
  "level": "1",
  "url": "section-math-induction.html",
  "type": "Section",
  "number": "2.1",
  "title": "Mathematical Induction and Math in a Title <span class=\"process-math\">\\(A\\notsubset B\\)<\/span>",
  "body": " Mathematical Induction and Math in a Title  Suppose we wish to show that for any natural number . This formula is easily verified for small numbers such as , 2, 3, or 4, but it is impossible to verify for all natural numbers on a case-by-case basis. To prove the formula true in general, a more generic method is required.  Suppose we have verified the equation for the first cases. We will attempt to show that we can generate the formula for the th case from this knowledge. The formula is true for since . If we have verified the first cases, then .  This is exactly the formula for the th case.  This method of proof is known as mathematical induction . Instead of attempting to verify a statement about some subset of the positive integers on a case-by-case basis, an impossible task if is an infinite set, we give a specific proof for the smallest integer being considered, followed by a generic argument showing that if the statement holds for a given case, then it must also hold for the next case in the sequence. We summarize mathematical induction in the following axiom.   First Principle of Mathematical Induction  Induction first principle of   Let be a statement about integers for and suppose is true for some integer . If for all integers with , implies that is true, then is true for all integers greater than or equal to .      An Inequality for Powers of  For all integers , . Since , the statement is true for . Assume that for . Then . But since is positive. Hence, by induction, the statement holds for all integers .    Some Integers Divisible by  Every integer is divisible by 9 for . For , is divisible by 9. Suppose that is divisible by 9 for . Then is divisible by 9.    The Binomial Theorem  We will prove the binomial theorem using mathematical induction; that is, , where and are real numbers, , and is the binomial coefficient. We first show that . This result follows from .   factorial    binomial coefficient   If , the binomial theorem is easy to verify. Now assume that the result is true for greater than or equal to 1. Then .   We have an equivalent statement of the Principle of Mathematical Induction that is often very useful.   Second Principle of Mathematical Induction  Induction second principle of   Let be a statement about integers for and suppose is true for some integer . If imply that for , then the statement is true for all integers .     A nonempty subset of is well-ordered Well-ordered set if contains a least element. Notice that the set is not well-ordered since it does not contain a smallest element. However, the natural numbers are well-ordered.   Principle of Well-Ordering   Every nonempty subset of the natural numbers is well-ordered.    The Principle of Well-Ordering is equivalent to the Principle of Mathematical Induction.    The Principle of Mathematical Induction implies that is the least positive natural number.    Let . Then . Now assume that ; that is, . Since , ; hence, by induction, every natural number is greater than or equal to 1.        The Principle of Mathematical Induction implies the Principle of Well-Ordering. That is, every nonempty subset of contains a least element.    We must show that if is a nonempty subset of the natural numbers, then contains a least element. If contains 1, then the theorem is true by . Assume that if contains an integer such that , then contains a least element. We will show that if a set contains an integer less than or equal to , then has a least element. If does not contain an integer less than , then is the smallest integer in . Otherwise, since is nonempty, must contain an integer less than or equal to . In this case, by induction, contains a least element.     Induction can also be very useful in formulating definitions. For instance, there are two ways to define , the factorial of a positive integer .  The explicit definition: .  The inductive or recursive definition: and for .   Every good mathematician or computer scientist knows that looking at problems recursively, as opposed to explicitly, often results in better understanding of complex issues.  "
},
{
  "id": "p-248",
  "level": "2",
  "url": "section-math-induction.html#p-248",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mathematical induction "
},
{
  "id": "principle-1",
  "level": "2",
  "url": "section-math-induction.html#principle-1",
  "type": "Principle",
  "number": "2.1.1",
  "title": "First Principle of Mathematical Induction.",
  "body": " First Principle of Mathematical Induction  Induction first principle of   Let be a statement about integers for and suppose is true for some integer . If for all integers with , implies that is true, then is true for all integers greater than or equal to .   "
},
{
  "id": "example-integers-induction-greater-than",
  "level": "2",
  "url": "section-math-induction.html#example-integers-induction-greater-than",
  "type": "Example",
  "number": "2.1.2",
  "title": "An Inequality for Powers of <span class=\"process-math\">\\(2\\)<\/span>.",
  "body": " An Inequality for Powers of  For all integers , . Since , the statement is true for . Assume that for . Then . But since is positive. Hence, by induction, the statement holds for all integers .  "
},
{
  "id": "example-integers-induction-divisible",
  "level": "2",
  "url": "section-math-induction.html#example-integers-induction-divisible",
  "type": "Example",
  "number": "2.1.3",
  "title": "Some Integers Divisible by <span class=\"process-math\">\\(9\\)<\/span>.",
  "body": " Some Integers Divisible by  Every integer is divisible by 9 for . For , is divisible by 9. Suppose that is divisible by 9 for . Then is divisible by 9.  "
},
{
  "id": "example-integers-binomial-theorem",
  "level": "2",
  "url": "section-math-induction.html#example-integers-binomial-theorem",
  "type": "Example",
  "number": "2.1.4",
  "title": "The Binomial Theorem.",
  "body": " The Binomial Theorem  We will prove the binomial theorem using mathematical induction; that is, , where and are real numbers, , and is the binomial coefficient. We first show that . This result follows from .   factorial    binomial coefficient   If , the binomial theorem is easy to verify. Now assume that the result is true for greater than or equal to 1. Then .  "
},
{
  "id": "principle-2",
  "level": "2",
  "url": "section-math-induction.html#principle-2",
  "type": "Principle",
  "number": "2.1.5",
  "title": "Second Principle of Mathematical Induction.",
  "body": " Second Principle of Mathematical Induction  Induction second principle of   Let be a statement about integers for and suppose is true for some integer . If imply that for , then the statement is true for all integers .   "
},
{
  "id": "p-256",
  "level": "2",
  "url": "section-math-induction.html#p-256",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "well-ordered "
},
{
  "id": "principle-3",
  "level": "2",
  "url": "section-math-induction.html#principle-3",
  "type": "Principle",
  "number": "2.1.6",
  "title": "Principle of Well-Ordering.",
  "body": " Principle of Well-Ordering   Every nonempty subset of the natural numbers is well-ordered.   "
},
{
  "id": "lemma-integers-smallest-number",
  "level": "2",
  "url": "section-math-induction.html#lemma-integers-smallest-number",
  "type": "Lemma",
  "number": "2.1.7",
  "title": "",
  "body": "  The Principle of Mathematical Induction implies that is the least positive natural number.    Let . Then . Now assume that ; that is, . Since , ; hence, by induction, every natural number is greater than or equal to 1.   "
},
{
  "id": "theorem-integers-pmi-implies-pwo",
  "level": "2",
  "url": "section-math-induction.html#theorem-integers-pmi-implies-pwo",
  "type": "Theorem",
  "number": "2.1.8",
  "title": "",
  "body": "  The Principle of Mathematical Induction implies the Principle of Well-Ordering. That is, every nonempty subset of contains a least element.    We must show that if is a nonempty subset of the natural numbers, then contains a least element. If contains 1, then the theorem is true by . Assume that if contains an integer such that , then contains a least element. We will show that if a set contains an integer less than or equal to , then has a least element. If does not contain an integer less than , then is the smallest integer in . Otherwise, since is nonempty, must contain an integer less than or equal to . In this case, by induction, contains a least element.   "
},
{
  "id": "section-division-algorithm",
  "level": "1",
  "url": "section-division-algorithm.html",
  "type": "Section",
  "number": "2.2",
  "title": "The Division Algorithm",
  "body": " The Division Algorithm   An application of the Principle of Well-Ordering that we will use often is the division algorithm.   Division Algorithm  Division algorithm for integers   Let and be integers, with . Then there exist unique integers and such that where .    This is a perfect example of the existence-and-uniqueness type of proof. We must first prove that the numbers and actually exist. Then we must show that if and are two other such numbers, then and .  Existence of and . Let . If , then divides , and we can let and . If , we can use the Well-Ordering Principle. We must first show that is nonempty. If , then . If , then . In either case . By the Well-Ordering Principle, must have a smallest member, say . Therefore, , . We now show that . Suppose that . Then . In this case we would have in the set . But then , which would contradict the fact that is the smallest member of . So . Since , and so .  Uniqueness of and . Suppose there exist integers , , , and such that . Then . Assume that . From the last equation we have ; therefore, must divide and . This is possible only if . Hence, and .    Let and be integers. If for some integer , we write . An integer is called a common divisor of and if and . The greatest common divisor Greatest common divisor of two integers of integers and is a positive integer such that is a common divisor of and and if is any other common divisor of and , then . divides greatest common divisor of and We write ; for example, and . We say that two integers and are relatively prime if .    Let and be nonzero integers. Then there exist integers and such that . Furthermore, the greatest common divisor of and is unique.    Let . Clearly, the set is nonempty; hence, by the Well-Ordering Principle must have a smallest member, say . We claim that . Write where . If , then , which is in . But this would contradict the fact that is the smallest member of . Hence, and divides . A similar argument shows that divides . Therefore, is a common divisor of and .  Suppose that is another common divisor of and , and we want to show that . If we let and , then . So must divide . Hence, must be the unique greatest common divisor of and .       Let and be two integers that are relatively prime. Then there exist integers and such that .      The Euclidean Algorithm  Among other things, allows us to compute the greatest common divisor of two integers.   Greatest Common Divisor of Two Integers  Let us compute the greatest common divisor of and . First observe that .  Reversing our steps, 105 divides 420, 105 divides 525, 105 divides 945, and 105 divides 2415. Hence, 105 divides both 945 and 2415. If were another common divisor of 945 and 2415, then would also have to divide 105. Therefore, .  If we work backward through the above sequence of equations, we can also obtain numbers and such that . Observe that .  So and . Notice that and are not unique, since and would also work.   To compute , we are using repeated divisions to obtain a decreasing sequence of positive integers ; that is, .  To find and such that , we begin with this last equation and substitute results obtained from the previous equations: .  The algorithm that we have just used to find the greatest common divisor of two integers and and to write as the linear combination of and is known as the Euclidean algorithm Euclidean algorithm Algorithm Euclidean .    Prime Numbers  Let be an integer such that . We say that is a prime number Prime integer , or simply is prime , if the only positive numbers that divide are 1 and itself. An integer that is not prime is said to be composite Composite integer .   Euclid   Let and be integers and be a prime number. If , then either or .    Suppose that does not divide . We must show that . Since , there exist integers and such that . So . Since divides both and itself, must divide .     Euclid   There exist an infinite number of primes.    We will prove this theorem by contradiction. Suppose that there are only a finite number of primes, say . Let . Then must be divisible by some for . In this case, must divide , which is a contradiction. Hence, either is prime or there exists an additional prime number that divides .      Fundamental Theorem of Arithmetic  Fundamental Theorem of Arithmetic   Let be an integer such that . Then , where are primes (not necessarily distinct). Furthermore, this factorization is unique; that is, if , then and the 's are just the 's rearranged.    Uniqueness. To show uniqueness we will use induction on . The theorem is certainly true for since in this case is prime. Now assume that the result holds for all integers such that , and , where and . By , for some and for some . Since all of the 's and 's are prime, and . Hence, since . By the induction hypothesis, has a unique factorization. Hence, and for .  Existence. To show existence, suppose that there is some integer that cannot be written as the product of primes. Let be the set of all such numbers. By the Principle of Well-Ordering, has a smallest number, say . If the only positive factors of are and 1, then is prime, which is a contradiction. Hence, where and . Neither nor , since is the smallest element in . So .  Therefore, . So , which is a contradiction.      Historical Note  Prime numbers were first studied by the ancient Greeks. Two important results from antiquity are Euclid's proof that an infinite number of primes exist and the Sieve of Eratosthenes, a method of computing all of the prime numbers less than a fixed positive integer . One problem in number theory is to find a function such that is prime for each integer . Pierre Fermat (1601? 1665) conjectured that was prime for all , but later it was shown by Leonhard Euler (1707 1783) that is a composite number. One of the many unproven conjectures about prime numbers is Goldbach's Conjecture. In a letter to Euler in 1742, Christian Goldbach stated the conjecture that every even integer with the exception of 2 seemed to be the sum of two primes: , , , . Although the conjecture has been verified for the numbers up through , it has yet to be proven in general. Since prime numbers play an important role in public key cryptography, there is currently a great deal of interest in determining whether or not a large number is prime.   Sage  Sage's original purpose was to support research in number theory, so it is perfect for the types of computations with the integers that we have in this chapter.     "
},
{
  "id": "theorem-integers-division_algorithm",
  "level": "2",
  "url": "section-division-algorithm.html#theorem-integers-division_algorithm",
  "type": "Theorem",
  "number": "2.2.1",
  "title": "Division Algorithm.",
  "body": " Division Algorithm  Division algorithm for integers   Let and be integers, with . Then there exist unique integers and such that where .    This is a perfect example of the existence-and-uniqueness type of proof. We must first prove that the numbers and actually exist. Then we must show that if and are two other such numbers, then and .  Existence of and . Let . If , then divides , and we can let and . If , we can use the Well-Ordering Principle. We must first show that is nonempty. If , then . If , then . In either case . By the Well-Ordering Principle, must have a smallest member, say . Therefore, , . We now show that . Suppose that . Then . In this case we would have in the set . But then , which would contradict the fact that is the smallest member of . So . Since , and so .  Uniqueness of and . Suppose there exist integers , , , and such that . Then . Assume that . From the last equation we have ; therefore, must divide and . This is possible only if . Hence, and .   "
},
{
  "id": "p-272",
  "level": "2",
  "url": "section-division-algorithm.html#p-272",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "common divisor greatest common divisor relatively prime "
},
{
  "id": "theorem-integers-gcd",
  "level": "2",
  "url": "section-division-algorithm.html#theorem-integers-gcd",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "",
  "body": "  Let and be nonzero integers. Then there exist integers and such that . Furthermore, the greatest common divisor of and is unique.    Let . Clearly, the set is nonempty; hence, by the Well-Ordering Principle must have a smallest member, say . We claim that . Write where . If , then , which is in . But this would contradict the fact that is the smallest member of . Hence, and divides . A similar argument shows that divides . Therefore, is a common divisor of and .  Suppose that is another common divisor of and , and we want to show that . If we let and , then . So must divide . Hence, must be the unique greatest common divisor of and .    "
},
{
  "id": "corollary-integers-coprime",
  "level": "2",
  "url": "section-division-algorithm.html#corollary-integers-coprime",
  "type": "Corollary",
  "number": "2.2.3",
  "title": "",
  "body": "  Let and be two integers that are relatively prime. Then there exist integers and such that .   "
},
{
  "id": "example-integers-gcd",
  "level": "2",
  "url": "section-division-algorithm.html#example-integers-gcd",
  "type": "Example",
  "number": "2.2.4",
  "title": "Greatest Common Divisor of Two Integers.",
  "body": " Greatest Common Divisor of Two Integers  Let us compute the greatest common divisor of and . First observe that .  Reversing our steps, 105 divides 420, 105 divides 525, 105 divides 945, and 105 divides 2415. Hence, 105 divides both 945 and 2415. If were another common divisor of 945 and 2415, then would also have to divide 105. Therefore, .  If we work backward through the above sequence of equations, we can also obtain numbers and such that . Observe that .  So and . Notice that and are not unique, since and would also work.  "
},
{
  "id": "p-284",
  "level": "2",
  "url": "section-division-algorithm.html#p-284",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euclidean algorithm "
},
{
  "id": "p-285",
  "level": "2",
  "url": "section-division-algorithm.html#p-285",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prime number prime composite "
},
{
  "id": "theorem-integers-prime-divisor",
  "level": "2",
  "url": "section-division-algorithm.html#theorem-integers-prime-divisor",
  "type": "Lemma",
  "number": "2.2.5",
  "title": "",
  "body": " Euclid   Let and be integers and be a prime number. If , then either or .    Suppose that does not divide . We must show that . Since , there exist integers and such that . So . Since divides both and itself, must divide .   "
},
{
  "id": "theorem-integers-infinite-primes",
  "level": "2",
  "url": "section-division-algorithm.html#theorem-integers-infinite-primes",
  "type": "Theorem",
  "number": "2.2.6",
  "title": "",
  "body": " Euclid   There exist an infinite number of primes.    We will prove this theorem by contradiction. Suppose that there are only a finite number of primes, say . Let . Then must be divisible by some for . In this case, must divide , which is a contradiction. Hence, either is prime or there exists an additional prime number that divides .   "
},
{
  "id": "theorem-fund-theorem-arithmetic",
  "level": "2",
  "url": "section-division-algorithm.html#theorem-fund-theorem-arithmetic",
  "type": "Theorem",
  "number": "2.2.7",
  "title": "Fundamental Theorem of Arithmetic.",
  "body": " Fundamental Theorem of Arithmetic  Fundamental Theorem of Arithmetic   Let be an integer such that . Then , where are primes (not necessarily distinct). Furthermore, this factorization is unique; that is, if , then and the 's are just the 's rearranged.    Uniqueness. To show uniqueness we will use induction on . The theorem is certainly true for since in this case is prime. Now assume that the result holds for all integers such that , and , where and . By , for some and for some . Since all of the 's and 's are prime, and . Hence, since . By the induction hypothesis, has a unique factorization. Hence, and for .  Existence. To show existence, suppose that there is some integer that cannot be written as the product of primes. Let be the set of all such numbers. By the Principle of Well-Ordering, has a smallest number, say . If the only positive factors of are and 1, then is prime, which is a contradiction. Hence, where and . Neither nor , since is the smallest element in . So .  Therefore, . So , which is a contradiction.   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "section-division-algorithm.html#remark-1",
  "type": "Remark",
  "number": "2.2.8",
  "title": "Sage.",
  "body": " Sage  Sage's original purpose was to support research in number theory, so it is perfect for the types of computations with the integers that we have in this chapter.  "
},
{
  "id": "integers-sage",
  "level": "1",
  "url": "integers-sage.html",
  "type": "Section",
  "number": "2.3",
  "title": "Sage",
  "body": " Sage   Many properties of the algebraic objects we will study can be determined from properties of associated integers. And Sage has many powerful functions for analyzing integers.    Division Algorithm  The code a % b will return the remainder upon division of by . In other words, the result is the unique integer such that (1) , and (2) for some integer (the quotient), as guaranteed by the Division Algorithm ( ). Then will equal . For example,    It is also possible to get both the quotient and remainder at the same time with the .quo_rem() method (quotient and remainder).   A remainder of zero indicates divisibility. So (a % b) == 0 will return True if divides , and will otherwise return False .    The .divides() method is another option.      Greatest Common Divisor  The greatest common divisor of and is obtained with the command gcd(a, b) , where in our first uses, and are integers. Later, and can be other objects with a notion of divisibility and greatness, such as polynomials. For example,   We can use the gcd command to determine if a pair of integers are relatively prime.    The command xgcd(a,b) ( eXtended GCD ) returns a triple where the first element is the greatest common divisor of and (as with the gcd(a,b) command above), but the next two elements are values of and such that .   Portions of the triple can be extracted using [ ] ( indexing ) to access the entries of the triple, starting with the first as number 0 . For example, the following should always return the result True , even if you change the values of a and b . Try changing the values of a and b below, to see that the result is always True .   Studying this block of code will go a long way towards helping you get the most out of Sage's output. Note that = is how a value is assigned to a variable, while as in the last line, == is how we compare two items for equality .    Primes and Factoring  The method .is_prime() will determine if an integer is prime or not.     The command random_prime(a, proof=True) will generate a random prime number between and . Experiment by executing the following two compute cells several times. (Replacing proof=True by proof=False will speed up the search, but there will be a very, very, very small probability the result will not be prime.)    The command prime_range(a, b) returns an ordered list of all the primes from to , inclusive. For example,   The commands next_prime(a) and previous_prime(a) are other ways to get a single prime number of a desired size. Give them a try below if you have an empty compute cell there (as you will if you are reading in the Sage Notebook, or are reading the online version). (The hash symbol, # , is used to indicate a comment line, which will not be evaluated by Sage. So erase this line, or start on the one below it.)   In addition to checking if integers are prime or not, or generating prime numbers, Sage can also decompose any integer into its prime factors, as described by the Fundamental Theorem of Arithmetic ( ).   So and this is the unique way to write as a product of prime numbers (other than rearranging the order of the primes themselves in the product).  While Sage will print a factorization nicely, it is carried internally as a list of pairs of integers, with each pair being a base (a prime number) and an exponent (a positive integer). Study the following carefully, as it is another good exercise in working with Sage output in the form of lists.       The next compute cell reveals the internal version of the factorization by asking for the actual list. And we show how you could determine exactly how many terms the factorization has by using the length command, len() .    Can you extract the next two primes, and their exponents, from a ?    "
},
{
  "id": "exercises-integers",
  "level": "1",
  "url": "exercises-integers.html",
  "type": "Exercises",
  "number": "2.4",
  "title": "Exercises",
  "body": " Exercises   Prove that for .   The base case, is true.  Assume that is true. Then and so is true. Thus, is true for all positive integers .    Prove that for .    Prove that for .   The base case, is true. Assume is true. Then , so is true. Thus, is true for all positive integers .    Prove that for .    Prove that is divisible by 3 for .    Prove that is divisible by 99 for .    Show that    Use induction to prove that for .    Prove the Leibniz rule for , where is the th derivative of ; that is, show that   Follow the proof in .    Prove that for .    If is a nonnegative real number, then show that for .   The base case, is true. Assume is true. Then so is true. Therefore, is true for all positive integers .   Power Sets  Let be a set. Define the power set of , denoted , to be the set of all subsets of . power set of For example, For every positive integer , show that a set with exactly elements has a power set with exactly elements.    Prove that the two principles of mathematical induction stated in are equivalent.    Show that the Principle of Well-Ordering for the natural numbers implies that 1 is the smallest natural number. Use this result to show that the Principle of Well-Ordering implies the Principle of Mathematical Induction; that is, show that if such that and whenever , then .    For each of the following pairs of numbers and , calculate and find integers and such that .   14 and 39  234 and 165  1739 and 9923  471 and 562  23,771 and 19,945  and 3754     Let and be nonzero integers. If there exist integers and such that , show that and are relatively prime.    Fibonacci Numbers  The Fibonacci numbers are We can define them inductively by , , and for .   Prove that .  Prove that , .  Prove that .  Show that .  Prove that and are relatively prime.    For and use mathematical induction. Show that , , and . Use part . Use part and .    Let and be integers such that . Let and be integers such that . Prove that    Let be relatively prime. If is a perfect square, prove that and must both be perfect squares.   Use the Fundamental Theorem of Arithmetic.    Using the division algorithm, show that every perfect square is of the form or for some nonnegative integer .    Suppose that are pairwise relatively prime and that  Prove that , , and are odd and is even.    Let . Use the division algorithm to prove that every integer is congruent mod to precisely one of the integers . Conclude that if is an integer, then there is exactly one in such that and . Hence, the integers are indeed partitioned by congruence mod .    Define the least common multiple of two nonzero integers and , denoted by , to be the nonnegative integer such that both and divide , and if and divide any other integer , then also divides . the least common multiple of and Prove that any two integers and have a unique least common multiple.   Let , . Then , since . By the Principle of Well-Ordering, contains a least element . To show uniqueness, suppose that and for some . By the division algorithm, there exist unique integers and such that , where . Since and divide both , and , it must be the case that and both divide . Thus, by the minimality of . Therefore, .    If and , prove that .    Show that if and only if .    Prove that if and only if for integers , , and .    Let . Prove that if and , then .   Since , there exist integers and such that . Thus, . Since divides both and itself, must divide .    Let . Prove that if is prime, then must also be prime.    Prove that there are an infinite number of primes of the form .   Every prime must be of the form 2, 3, , or . Suppose there are only finitely many primes of the form .    Prove that there are an infinite number of primes of the form .    Using the fact that 2 is prime, show that there do not exist integers and such that . Demonstrate that therefore cannot be a rational number.   "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "exercises-integers.html#exercise-31",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "",
  "body": " Prove that for .   The base case, is true.  Assume that is true. Then and so is true. Thus, is true for all positive integers .  "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "exercises-integers.html#exercise-32",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "",
  "body": " Prove that for .  "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "exercises-integers.html#exercise-33",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "",
  "body": " Prove that for .   The base case, is true. Assume is true. Then , so is true. Thus, is true for all positive integers .  "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "exercises-integers.html#exercise-34",
  "type": "Exercise",
  "number": "2.4.4",
  "title": "",
  "body": " Prove that for .  "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "exercises-integers.html#exercise-35",
  "type": "Exercise",
  "number": "2.4.5",
  "title": "",
  "body": " Prove that is divisible by 3 for .  "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "exercises-integers.html#exercise-36",
  "type": "Exercise",
  "number": "2.4.6",
  "title": "",
  "body": " Prove that is divisible by 99 for .  "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "exercises-integers.html#exercise-37",
  "type": "Exercise",
  "number": "2.4.7",
  "title": "",
  "body": " Show that  "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "exercises-integers.html#exercise-38",
  "type": "Exercise",
  "number": "2.4.8",
  "title": "",
  "body": " Use induction to prove that for .  "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "exercises-integers.html#exercise-39",
  "type": "Exercise",
  "number": "2.4.9",
  "title": "",
  "body": " Prove the Leibniz rule for , where is the th derivative of ; that is, show that   Follow the proof in .  "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "exercises-integers.html#exercise-40",
  "type": "Exercise",
  "number": "2.4.10",
  "title": "",
  "body": " Prove that for .  "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "exercises-integers.html#exercise-41",
  "type": "Exercise",
  "number": "2.4.11",
  "title": "",
  "body": " If is a nonnegative real number, then show that for .   The base case, is true. Assume is true. Then so is true. Therefore, is true for all positive integers .  "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "exercises-integers.html#exercise-42",
  "type": "Exercise",
  "number": "2.4.12",
  "title": "Power Sets.",
  "body": "Power Sets  Let be a set. Define the power set of , denoted , to be the set of all subsets of . power set of For example, For every positive integer , show that a set with exactly elements has a power set with exactly elements.  "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "exercises-integers.html#exercise-43",
  "type": "Exercise",
  "number": "2.4.13",
  "title": "",
  "body": " Prove that the two principles of mathematical induction stated in are equivalent.  "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "exercises-integers.html#exercise-44",
  "type": "Exercise",
  "number": "2.4.14",
  "title": "",
  "body": " Show that the Principle of Well-Ordering for the natural numbers implies that 1 is the smallest natural number. Use this result to show that the Principle of Well-Ordering implies the Principle of Mathematical Induction; that is, show that if such that and whenever , then .  "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "exercises-integers.html#exercise-45",
  "type": "Exercise",
  "number": "2.4.15",
  "title": "",
  "body": " For each of the following pairs of numbers and , calculate and find integers and such that .   14 and 39  234 and 165  1739 and 9923  471 and 562  23,771 and 19,945  and 3754   "
},
{
  "id": "exercise-integers-gcd-1",
  "level": "2",
  "url": "exercises-integers.html#exercise-integers-gcd-1",
  "type": "Exercise",
  "number": "2.4.16",
  "title": "",
  "body": " Let and be nonzero integers. If there exist integers and such that , show that and are relatively prime.  "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "exercises-integers.html#exercise-47",
  "type": "Exercise",
  "number": "2.4.17",
  "title": "Fibonacci Numbers.",
  "body": "Fibonacci Numbers  The Fibonacci numbers are We can define them inductively by , , and for .   Prove that .  Prove that , .  Prove that .  Show that .  Prove that and are relatively prime.    For and use mathematical induction. Show that , , and . Use part . Use part and .  "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "exercises-integers.html#exercise-48",
  "type": "Exercise",
  "number": "2.4.18",
  "title": "",
  "body": " Let and be integers such that . Let and be integers such that . Prove that  "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "exercises-integers.html#exercise-49",
  "type": "Exercise",
  "number": "2.4.19",
  "title": "",
  "body": " Let be relatively prime. If is a perfect square, prove that and must both be perfect squares.   Use the Fundamental Theorem of Arithmetic.  "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "exercises-integers.html#exercise-50",
  "type": "Exercise",
  "number": "2.4.20",
  "title": "",
  "body": " Using the division algorithm, show that every perfect square is of the form or for some nonnegative integer .  "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "exercises-integers.html#exercise-51",
  "type": "Exercise",
  "number": "2.4.21",
  "title": "",
  "body": " Suppose that are pairwise relatively prime and that  Prove that , , and are odd and is even.  "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "exercises-integers.html#exercise-52",
  "type": "Exercise",
  "number": "2.4.22",
  "title": "",
  "body": " Let . Use the division algorithm to prove that every integer is congruent mod to precisely one of the integers . Conclude that if is an integer, then there is exactly one in such that and . Hence, the integers are indeed partitioned by congruence mod .  "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "exercises-integers.html#exercise-53",
  "type": "Exercise",
  "number": "2.4.23",
  "title": "",
  "body": " Define the least common multiple of two nonzero integers and , denoted by , to be the nonnegative integer such that both and divide , and if and divide any other integer , then also divides . the least common multiple of and Prove that any two integers and have a unique least common multiple.   Let , . Then , since . By the Principle of Well-Ordering, contains a least element . To show uniqueness, suppose that and for some . By the division algorithm, there exist unique integers and such that , where . Since and divide both , and , it must be the case that and both divide . Thus, by the minimality of . Therefore, .  "
},
{
  "id": "exercise-integers-lcm-gcd",
  "level": "2",
  "url": "exercises-integers.html#exercise-integers-lcm-gcd",
  "type": "Exercise",
  "number": "2.4.24",
  "title": "",
  "body": " If and , prove that .  "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "exercises-integers.html#exercise-55",
  "type": "Exercise",
  "number": "2.4.25",
  "title": "",
  "body": " Show that if and only if .  "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "exercises-integers.html#exercise-56",
  "type": "Exercise",
  "number": "2.4.26",
  "title": "",
  "body": " Prove that if and only if for integers , , and .  "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "exercises-integers.html#exercise-57",
  "type": "Exercise",
  "number": "2.4.27",
  "title": "",
  "body": " Let . Prove that if and , then .   Since , there exist integers and such that . Thus, . Since divides both and itself, must divide .  "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "exercises-integers.html#exercise-58",
  "type": "Exercise",
  "number": "2.4.28",
  "title": "",
  "body": " Let . Prove that if is prime, then must also be prime.  "
},
{
  "id": "exercise-59",
  "level": "2",
  "url": "exercises-integers.html#exercise-59",
  "type": "Exercise",
  "number": "2.4.29",
  "title": "",
  "body": " Prove that there are an infinite number of primes of the form .   Every prime must be of the form 2, 3, , or . Suppose there are only finitely many primes of the form .  "
},
{
  "id": "exercise-60",
  "level": "2",
  "url": "exercises-integers.html#exercise-60",
  "type": "Exercise",
  "number": "2.4.30",
  "title": "",
  "body": " Prove that there are an infinite number of primes of the form .  "
},
{
  "id": "exercise-61",
  "level": "2",
  "url": "exercises-integers.html#exercise-61",
  "type": "Exercise",
  "number": "2.4.31",
  "title": "",
  "body": " Using the fact that 2 is prime, show that there do not exist integers and such that . Demonstrate that therefore cannot be a rational number.  "
},
{
  "id": "exercises-4",
  "level": "1",
  "url": "exercises-4.html",
  "type": "Exercises",
  "number": "2.5",
  "title": "Programming Exercises",
  "body": " Programming Exercises  The Sieve of Eratosthenes Sieve of Eratosthenes  One method of computing all of the prime numbers less than a certain fixed positive integer is to list all of the numbers such that . Begin by eliminating all of the multiples of 2. Next eliminate all of the multiples of 3. Now eliminate all of the multiples of 5. Notice that 4 has already been crossed out. Continue in this manner, noticing that we do not have to go all the way to ; it suffices to stop at . Using this method, compute all of the prime numbers less than . We can also use this method to find all of the integers that are relatively prime to an integer . Simply eliminate the prime factors of and all of their multiples. Using this method, find all of the numbers that are relatively prime to . Using the Sieve of Eratosthenes, write a program that will compute all of the primes less than an integer .   Ackermann's function  Let . Ackermann's function is the function defined by the equations .  Use this definition to compute . Write a program to evaluate Ackermann's function. Modify the program to count the number of statements executed in the program when Ackermann's function is evaluated. How many statements are executed in the evaluation of ? What about ?    Write a computer program that will implement the Euclidean algorithm. The program should accept two positive integers and as input and should output as well as integers and such that .   "
},
{
  "id": "sieve-primes",
  "level": "2",
  "url": "exercises-4.html#sieve-primes",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "The Sieve of Eratosthenes.",
  "body": "The Sieve of Eratosthenes Sieve of Eratosthenes  One method of computing all of the prime numbers less than a certain fixed positive integer is to list all of the numbers such that . Begin by eliminating all of the multiples of 2. Next eliminate all of the multiples of 3. Now eliminate all of the multiples of 5. Notice that 4 has already been crossed out. Continue in this manner, noticing that we do not have to go all the way to ; it suffices to stop at . Using this method, compute all of the prime numbers less than . We can also use this method to find all of the integers that are relatively prime to an integer . Simply eliminate the prime factors of and all of their multiples. Using this method, find all of the numbers that are relatively prime to . Using the Sieve of Eratosthenes, write a program that will compute all of the primes less than an integer .  "
},
{
  "id": "exercise-63",
  "level": "2",
  "url": "exercises-4.html#exercise-63",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": "Ackermann's function  Let . Ackermann's function is the function defined by the equations .  Use this definition to compute . Write a program to evaluate Ackermann's function. Modify the program to count the number of statements executed in the program when Ackermann's function is evaluated. How many statements are executed in the evaluation of ? What about ?  "
},
{
  "id": "exercise-64",
  "level": "2",
  "url": "exercises-4.html#exercise-64",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": " Write a computer program that will implement the Euclidean algorithm. The program should accept two positive integers and as input and should output as well as integers and such that .  "
},
{
  "id": "integers-sage-exercises",
  "level": "1",
  "url": "integers-sage-exercises.html",
  "type": "Exercises",
  "number": "2.6",
  "title": "Sage Exercises",
  "body": " Sage Exercises   These exercises are about investigating basic properties of the integers, something we will frequently do when investigating groups. Use the editing capabilities of a Sage worksheet to annotate and explain your work.    Use the next_prime() command to construct two different 8-digit prime numbers and save them in variables named a and b .    Use the .is_prime() method to verify that your primes a and b are really prime.    Verify that is the greatest common divisor of your two primes from the previous exercises.    Find two integers that make a linear combination of your two primes equal to . Include a verification of your result.    Determine a factorization into powers of primes for .    Write a compute cell that defines the same value of c again, and then defines a candidate divisor of c named d . The third line of the cell should return True if and only if d is a divisor of c . Illustrate the use of your cell by testing your code with and in a new copy of the cell, testing your code with .   "
},
{
  "id": "exercise-65",
  "level": "2",
  "url": "integers-sage-exercises.html#exercise-65",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "",
  "body": " Use the next_prime() command to construct two different 8-digit prime numbers and save them in variables named a and b .  "
},
{
  "id": "exercise-66",
  "level": "2",
  "url": "integers-sage-exercises.html#exercise-66",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "",
  "body": " Use the .is_prime() method to verify that your primes a and b are really prime.  "
},
{
  "id": "exercise-67",
  "level": "2",
  "url": "integers-sage-exercises.html#exercise-67",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "",
  "body": " Verify that is the greatest common divisor of your two primes from the previous exercises.  "
},
{
  "id": "exercise-68",
  "level": "2",
  "url": "integers-sage-exercises.html#exercise-68",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "",
  "body": " Find two integers that make a linear combination of your two primes equal to . Include a verification of your result.  "
},
{
  "id": "exercise-69",
  "level": "2",
  "url": "integers-sage-exercises.html#exercise-69",
  "type": "Exercise",
  "number": "2.6.5",
  "title": "",
  "body": " Determine a factorization into powers of primes for .  "
},
{
  "id": "exercise-70",
  "level": "2",
  "url": "integers-sage-exercises.html#exercise-70",
  "type": "Exercise",
  "number": "2.6.6",
  "title": "",
  "body": " Write a compute cell that defines the same value of c again, and then defines a candidate divisor of c named d . The third line of the cell should return True if and only if d is a divisor of c . Illustrate the use of your cell by testing your code with and in a new copy of the cell, testing your code with .  "
},
{
  "id": "references-2",
  "level": "1",
  "url": "references-2.html",
  "type": "References",
  "number": "2.7",
  "title": "References and Suggested Readings",
  "body": " References and Suggested Readings     Brookshear, J. G. Theory of Computation: Formal Languages, Automata, and Complexity . Benjamin\/Cummings, Redwood City, CA, 1989. Shows the relationships of the theoretical aspects of computer science to set theory and the integers.    Hardy, G. H. and Wright, E. M. An Introduction to the Theory of Numbers . 6th ed. Oxford University Press, New York, 2008.    Niven, I. and Zuckerman, H. S. An Introduction to the Theory of Numbers . 5th ed. Wiley, New York, 1991.    Vanden Eynden, C. Elementary Number Theory . 2nd ed. Waveland Press, Long Grove IL, 2001.  "
},
{
  "id": "section-mod-n-sym",
  "level": "1",
  "url": "section-mod-n-sym.html",
  "type": "Section",
  "number": "3.1",
  "title": "Integer Equivalence Classes and Symmetries",
  "body": " Integer Equivalence Classes and Symmetries  Carl Friedrich Gauß  Leonhard Euler   Let us now investigate some mathematical structures that can be viewed as sets with single operations.    The Integers mod  Gottfried Wilhelm Leibniz  The integers mod have become indispensable in the theory and applications of algebra. In mathematics they are used in cryptography, coding theory, and the detection of errors in identification codes.  We have already seen that two integers and are equivalent mod if divides . The integers mod also partition into different equivalence classes; we will denote the set of these equivalence classes by . the integers modulo Consider the integers modulo 12 and the corresponding partition of the integers: .  When no confusion can arise, we will use to indicate the equivalence classes respectively. We can do arithmetic on . For two integers and , define addition modulo to be ; that is, the remainder when is divided by . Similarly, multiplication modulo is defined as , the remainder when is divided by .   Modular Addition  The following examples illustrate integer arithmetic modulo : .  In particular, notice that it is possible that the product of two nonzero numbers modulo can be equivalent to modulo .    Modular Arithmetic  Most, but not all, of the usual laws of arithmetic hold for addition and multiplication in . For instance, it is not necessarily true that there is a multiplicative inverse. Consider the multiplication table for in . Notice that 2, 4, and 6 do not have multiplicative inverses; that is, for , 4, or 6, there is no integer such that .   Multiplication table for       Let be the set of equivalence classes of the integers mod and .   Addition and multiplication are commutative:    Addition and multiplication are associative: .    There are both additive and multiplicative identities: .    Multiplication distributes over addition: .    For every integer there is an additive inverse : .    Let be a nonzero integer. Then if and only if there exists a multiplicative inverse for ; that is, a nonzero integer such that .      We will prove (1) and (6) and leave the remaining properties to be proven in the exercises.  (1) Addition and multiplication are commutative modulo since the remainder of divided by is the same as the remainder of divided by .  (6) Suppose that . Then there exist integers and such that . Since , it must be the case that . Letting be the equivalence class of , .  Conversely, suppose that there exists an integer such that . Then divides , so there is an integer such that . Let . Since divides , must also divide 1; hence, .      Symmetries    Rigid motions of a rectangle      A symmetry of a geometric figure is a rearrangement of the figure preserving the arrangement of its sides and vertices as well as its distances and angles. A map from the plane to itself preserving the symmetry of an object is called a rigid motion Rigid motion . For example, if we look at the rectangle in , it is easy to see that a rotation of or returns a rectangle in the plane with the same orientation as the original rectangle and the same relationship among the vertices. A reflection of the rectangle across either the vertical axis or the horizontal axis can also be seen to be a symmetry. However, a rotation in either direction cannot be a symmetry unless the rectangle is a square.    Symmetries of a triangle      Let us find the symmetries of the equilateral triangle . To find a symmetry of , we must first examine the permutations of the vertices , , and and then ask if a permutation extends to a symmetry of the triangle. Recall that a permutation of a set is a one-to-one and onto map . The three vertices have permutations, so the triangle has at most six symmetries. To see that there are six permutations, observe there are three different possibilities for the first vertex, and two for the second, and the remaining vertex is determined by the placement of the first two. So we have different arrangements. To denote the permutation of the vertices of an equilateral triangle that sends to , to , and to , we write the array . Notice that this particular permutation corresponds to the rigid motion of rotating the triangle by in a clockwise direction. In fact, every permutation gives rise to a symmetry of the triangle. All of these symmetries are shown in .  A natural question to ask is what happens if one motion of the triangle is followed by another. Which symmetry is ; that is, what happens when we do the permutation and then the permutation ? Remember that we are composing functions here. Although we usually multiply left to right, we compose functions right to left. We have .  This is the same symmetry as . Suppose we do these motions in the opposite order, then . It is easy to determine that this is the same as the symmetry ; hence, . A multiplication table for the symmetries of an equilateral triangle is given in .  Notice that in the multiplication table for the symmetries of an equilateral triangle, for every motion of the triangle there is another motion such that ; that is, for every motion there is another motion that takes the triangle back to its original orientation.   Symmetries of an equilateral triangle     "
},
{
  "id": "example-groups-zn-addition",
  "level": "2",
  "url": "section-mod-n-sym.html#example-groups-zn-addition",
  "type": "Example",
  "number": "3.1.1",
  "title": "Modular Addition.",
  "body": " Modular Addition  The following examples illustrate integer arithmetic modulo : .  In particular, notice that it is possible that the product of two nonzero numbers modulo can be equivalent to modulo .  "
},
{
  "id": "example-groups-zn-arithmetic-laws",
  "level": "2",
  "url": "section-mod-n-sym.html#example-groups-zn-arithmetic-laws",
  "type": "Example",
  "number": "3.1.2",
  "title": "Modular Arithmetic.",
  "body": " Modular Arithmetic  Most, but not all, of the usual laws of arithmetic hold for addition and multiplication in . For instance, it is not necessarily true that there is a multiplicative inverse. Consider the multiplication table for in . Notice that 2, 4, and 6 do not have multiplicative inverses; that is, for , 4, or 6, there is no integer such that .   Multiplication table for    "
},
{
  "id": "proposition-zn-equiv-classes",
  "level": "2",
  "url": "section-mod-n-sym.html#proposition-zn-equiv-classes",
  "type": "Proposition",
  "number": "3.1.4",
  "title": "",
  "body": "  Let be the set of equivalence classes of the integers mod and .   Addition and multiplication are commutative:    Addition and multiplication are associative: .    There are both additive and multiplicative identities: .    Multiplication distributes over addition: .    For every integer there is an additive inverse : .    Let be a nonzero integer. Then if and only if there exists a multiplicative inverse for ; that is, a nonzero integer such that .      We will prove (1) and (6) and leave the remaining properties to be proven in the exercises.  (1) Addition and multiplication are commutative modulo since the remainder of divided by is the same as the remainder of divided by .  (6) Suppose that . Then there exist integers and such that . Since , it must be the case that . Letting be the equivalence class of , .  Conversely, suppose that there exists an integer such that . Then divides , so there is an integer such that . Let . Since divides , must also divide 1; hence, .   "
},
{
  "id": "figure-groups-rectangle",
  "level": "2",
  "url": "section-mod-n-sym.html#figure-groups-rectangle",
  "type": "Figure",
  "number": "3.1.5",
  "title": "",
  "body": " Rigid motions of a rectangle     "
},
{
  "id": "p-401",
  "level": "2",
  "url": "section-mod-n-sym.html#p-401",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetry rigid motion "
},
{
  "id": "figure-s3-symmetry",
  "level": "2",
  "url": "section-mod-n-sym.html#figure-s3-symmetry",
  "type": "Figure",
  "number": "3.1.6",
  "title": "",
  "body": " Symmetries of a triangle     "
},
{
  "id": "p-402",
  "level": "2",
  "url": "section-mod-n-sym.html#p-402",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "permutation "
},
{
  "id": "figure-s3",
  "level": "2",
  "url": "section-mod-n-sym.html#figure-s3",
  "type": "Figure",
  "number": "3.1.7",
  "title": "",
  "body": " Symmetries of an equilateral triangle   "
},
{
  "id": "section-groups-define",
  "level": "1",
  "url": "section-groups-define.html",
  "type": "Section",
  "number": "3.2",
  "title": "Definitions and Examples",
  "body": " Definitions and Examples     Definition of a Group  The integers mod and the symmetries of a triangle or a rectangle are examples of groups. A binary operation Binary operation or law of composition on a set is a function that assigns to each pair a unique element , or in , called the composition of and . A group Group definition of  is a set together with a law of composition that satisfies the following axioms.  The law of composition is associative . That is, for .  There exists an element , called the identity element Element identity , such that for any element  .  For each element , there exists an inverse element Element inverse in G, denoted by , such that .   A group with the property that for all is called abelian Abelian group Group abelian or commutative Group commutative . Groups not satisfying this property are said to be nonabelian Group nonabelian or noncommutative Group noncommutative .    Examples of Groups   Group of All Integers  The integers form a group under the operation of addition. The binary operation on two integers is just their sum. Since the integers under addition already have a well-established notation, we will use the operator instead of ; that is, we shall write instead of . The identity is 0, and the inverse of is written as instead of . Notice that the set of integers under addition have the additional property that and therefore form an abelian group.   Most of the time we will write instead of ; however, if the group already has a natural operation such as addition in the integers, we will use that operation. That is, if we are adding two integers, we still write , for the inverse, and 0 for the identity as usual. We also write instead of .  It is often convenient to describe a group in terms of an addition or multiplication table. Such a table is called a Cayley table Cayley table .   Group of Integers Modulo  The integers mod form a group under addition modulo . Consider , consisting of the equivalence classes of the integers 0, 1, 2, 3, and 4. We define the group operation on by modular addition. We write the binary operation on the group additively; that is, we write . The element 0 is the identity of the group and each element in has an inverse. For instance, . is a Cayley table for (Contributed by ). By , is a group under the binary operation of addition mod .   Cayley table for      Multiplication of Integers Modulo  Not every set with a binary operation is a group. For example, if we let modular multiplication be the binary operation on , then fails to be a group. The element 1 acts as a group identity since for any ; however, a multiplicative inverse for does not exist since for every in . Even if we consider the set , we still may not have a group. For instance, let . Then 2 has no multiplicative inverse since .  By , every nonzero does have an inverse in if is relatively prime to . Denote the set of all such nonzero elements in by . group of units in Then is a group called the group of units Group of units of . is a Cayley table for the group .   Multiplication table for      Symmetries of a Triangle is not Abelian  The symmetries of an equilateral triangle described in form a nonabelian group. As we observed, it is not necessarily true that for two symmetries and . Using , which is a Cayley table for this group, we can easily check that the symmetries of an equilateral triangle are indeed a group. We will denote this group by either or , for reasons that will be explained later.    Matrix Multiplication of Matrices is a Group  We use to denote the set of all matrices. Let be the subset of consisting of invertible matrices; that is, a matrix the matrices with entries in  is in if there exists a matrix such that , where is the identity matrix. For to have an inverse is equivalent to requiring that the determinant of be nonzero; that is, . the determinant of The set of invertible matrices forms a group called the general linear group Group general linear . the general linear group The identity of the group is the identity matrix . The inverse of is . The product of two invertible matrices is again invertible. Matrix multiplication is associative, satisfying the other group axiom. For matrices it is not true in general that ; hence, is another example of a nonabelian group.     Group of Quaternions  Let , where . Then the relations , , , , , , and hold. The set is a group called the quaternion group . Notice that is noncommutative.   the group of quaternions   Group  quaternion   Quaternions     Group of Nonzero Complex Numbers  Let be the set of nonzero complex numbers. the multiplicative group of complex numbers Under the operation of multiplication forms a group. The identity is 1. If is a nonzero complex number, then is the inverse of . It is easy to see that the remaining group axioms hold.   A group is finite Group finite , or has finite order , if it contains a finite number of elements; otherwise, the group is said to be infinite or to have infinite order Group infinite . The order Group order of of a finite group is the number of elements that it contains. If is a group containing elements, we write . the order of a group The group is a finite group of order 5; the integers form an infinite group under addition, and we sometimes write .    Basic Properties of Groups    The identity element in a group is unique; that is, there exists only one element such that for all .    Suppose that and are both identities in . Then and for all . We need to show that . If we think of as the identity, then ; but if is the identity, then . Combining these two equations, we have . ( helped with this proof.)    Inverses in a group are also unique. If and are both inverses of an element in a group , then and . We want to show that , but . We summarize this fact in the following proposition.    If is any element in a group , then the inverse of , denoted by , is unique.      Let be a group. If , then .    Let . Then . Similarly, . But by the previous proposition, inverses are unique; hence, .      Let be a group. For any , .    Observe that . Consequently, multiplying both sides of this equation by , we have .    It makes sense to write equations with group elements and group operations. If and are two elements in a group , does there exist an element such that ? If such an does exist, is it unique? The following proposition answers both of these questions positively.    Let be a group and and be any two elements in . Then the equations and have unique solutions in .    Suppose that . We must show that such an exists. Multiplying both sides of by , we have .  To show uniqueness, suppose that and are both solutions of ; then . So . The proof for the existence and uniqueness of the solution of is similar.      If is a group and , then implies and implies .    This proposition tells us that the right and left cancellation laws Cancellation law for groups are true in groups. We leave the proof as an exercise.  We can use exponential notation for groups just as we do in ordinary algebra. If is a group and , then we define . For , we define and .    In a group, the usual laws of exponents hold; that is, for all ,  for all ;  for all ;  for all . Furthermore, if is abelian, then .     We will leave the proof of this theorem as an exercise. Notice that in general, since the group may not be abelian. If the group is or , we write the group operation additively and the exponential operation multiplicatively; that is, we write instead of . The laws of exponents now become  for all ;  for all ;  for all .   It is important to realize that the last statement can be made only because and are commutative groups.    Historical Note  Although the first clear axiomatic definition of a group was not given until the late 1800s, group-theoretic methods had been employed before this time in the development of many areas of mathematics, including geometry and the theory of algebraic equations.  Joseph-Louis Lagrange Lagrange, Joseph-Louis used group-theoretic methods in a 1770 1771 memoir to study methods of solving polynomial equations. Later, Évariste Galois Galois, Évariste (1811 1832) succeeded in developing the mathematics necessary to determine exactly which polynomial equations could be solved in terms of the polynomial's coefficients. Galois' primary tool was group theory.  The study of geometry was revolutionized in 1872 when Felix Klein Klein, Felix proposed that geometric spaces should be studied by examining those properties that are invariant under a transformation of the space. Sophus Lie Lie, Sophus , a contemporary of Klein, used group theory to study solutions of partial differential equations. One of the first modern treatments of group theory appeared in William Burnside's Burnside, William  The Theory of Groups of Finite Order [1], first published in 1897.   "
},
{
  "id": "p-407",
  "level": "2",
  "url": "section-groups-define.html#p-407",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binary operation law of composition group associative identity element inverse element "
},
{
  "id": "p-411",
  "level": "2",
  "url": "section-groups-define.html#p-411",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "abelian commutative nonabelian noncommutative "
},
{
  "id": "example-groups-integers",
  "level": "2",
  "url": "section-groups-define.html#example-groups-integers",
  "type": "Example",
  "number": "3.2.1",
  "title": "Group of All Integers.",
  "body": " Group of All Integers  The integers form a group under the operation of addition. The binary operation on two integers is just their sum. Since the integers under addition already have a well-established notation, we will use the operator instead of ; that is, we shall write instead of . The identity is 0, and the inverse of is written as instead of . Notice that the set of integers under addition have the additional property that and therefore form an abelian group.  "
},
{
  "id": "p-414",
  "level": "2",
  "url": "section-groups-define.html#p-414",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cayley table "
},
{
  "id": "example-groups-z5",
  "level": "2",
  "url": "section-groups-define.html#example-groups-z5",
  "type": "Example",
  "number": "3.2.2",
  "title": "Group of Integers Modulo <span class=\"process-math\">\\(5\\)<\/span>.",
  "body": " Group of Integers Modulo  The integers mod form a group under addition modulo . Consider , consisting of the equivalence classes of the integers 0, 1, 2, 3, and 4. We define the group operation on by modular addition. We write the binary operation on the group additively; that is, we write . The element 0 is the identity of the group and each element in has an inverse. For instance, . is a Cayley table for (Contributed by ). By , is a group under the binary operation of addition mod .   Cayley table for    "
},
{
  "id": "example-groups-z6-mult",
  "level": "2",
  "url": "section-groups-define.html#example-groups-z6-mult",
  "type": "Example",
  "number": "3.2.4",
  "title": "Multiplication of Integers Modulo <span class=\"process-math\">\\(6\\)<\/span>.",
  "body": " Multiplication of Integers Modulo  Not every set with a binary operation is a group. For example, if we let modular multiplication be the binary operation on , then fails to be a group. The element 1 acts as a group identity since for any ; however, a multiplicative inverse for does not exist since for every in . Even if we consider the set , we still may not have a group. For instance, let . Then 2 has no multiplicative inverse since .  By , every nonzero does have an inverse in if is relatively prime to . Denote the set of all such nonzero elements in by . group of units in Then is a group called the group of units Group of units of . is a Cayley table for the group .   Multiplication table for    "
},
{
  "id": "example-groups-nonabelian",
  "level": "2",
  "url": "section-groups-define.html#example-groups-nonabelian",
  "type": "Example",
  "number": "3.2.6",
  "title": "Symmetries of a Triangle is not Abelian.",
  "body": " Symmetries of a Triangle is not Abelian  The symmetries of an equilateral triangle described in form a nonabelian group. As we observed, it is not necessarily true that for two symmetries and . Using , which is a Cayley table for this group, we can easily check that the symmetries of an equilateral triangle are indeed a group. We will denote this group by either or , for reasons that will be explained later.  "
},
{
  "id": "example-groups-gl2",
  "level": "2",
  "url": "section-groups-define.html#example-groups-gl2",
  "type": "Example",
  "number": "3.2.7",
  "title": "Matrix Multiplication of <span class=\"process-math\">\\(2\\times 2\\)<\/span> Matrices is a Group.",
  "body": " Matrix Multiplication of Matrices is a Group  We use to denote the set of all matrices. Let be the subset of consisting of invertible matrices; that is, a matrix the matrices with entries in  is in if there exists a matrix such that , where is the identity matrix. For to have an inverse is equivalent to requiring that the determinant of be nonzero; that is, . the determinant of The set of invertible matrices forms a group called the general linear group Group general linear . the general linear group The identity of the group is the identity matrix . The inverse of is . The product of two invertible matrices is again invertible. Matrix multiplication is associative, satisfying the other group axiom. For matrices it is not true in general that ; hence, is another example of a nonabelian group.  "
},
{
  "id": "example-groups-quaterions",
  "level": "2",
  "url": "section-groups-define.html#example-groups-quaterions",
  "type": "Example",
  "number": "3.2.8",
  "title": "Group of Quaternions.",
  "body": " Group of Quaternions  Let , where . Then the relations , , , , , , and hold. The set is a group called the quaternion group . Notice that is noncommutative.   the group of quaternions   Group  quaternion   Quaternions   "
},
{
  "id": "example-groups-c-star",
  "level": "2",
  "url": "section-groups-define.html#example-groups-c-star",
  "type": "Example",
  "number": "3.2.9",
  "title": "Group of Nonzero Complex Numbers.",
  "body": " Group of Nonzero Complex Numbers  Let be the set of nonzero complex numbers. the multiplicative group of complex numbers Under the operation of multiplication forms a group. The identity is 1. If is a nonzero complex number, then is the inverse of . It is easy to see that the remaining group axioms hold.  "
},
{
  "id": "p-424",
  "level": "2",
  "url": "section-groups-define.html#p-424",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "finite finite order infinite infinite order order "
},
{
  "id": "proposition-3",
  "level": "2",
  "url": "section-groups-define.html#proposition-3",
  "type": "Proposition",
  "number": "3.2.10",
  "title": "",
  "body": "  The identity element in a group is unique; that is, there exists only one element such that for all .    Suppose that and are both identities in . Then and for all . We need to show that . If we think of as the identity, then ; but if is the identity, then . Combining these two equations, we have . ( helped with this proof.)   "
},
{
  "id": "proposition-4",
  "level": "2",
  "url": "section-groups-define.html#proposition-4",
  "type": "Proposition",
  "number": "3.2.11",
  "title": "",
  "body": "  If is any element in a group , then the inverse of , denoted by , is unique.   "
},
{
  "id": "proposition-inverse-of-products",
  "level": "2",
  "url": "section-groups-define.html#proposition-inverse-of-products",
  "type": "Proposition",
  "number": "3.2.12",
  "title": "",
  "body": "  Let be a group. If , then .    Let . Then . Similarly, . But by the previous proposition, inverses are unique; hence, .   "
},
{
  "id": "proposition-6",
  "level": "2",
  "url": "section-groups-define.html#proposition-6",
  "type": "Proposition",
  "number": "3.2.13",
  "title": "",
  "body": "  Let be a group. For any , .    Observe that . Consequently, multiplying both sides of this equation by , we have .   "
},
{
  "id": "proposition-group-equations",
  "level": "2",
  "url": "section-groups-define.html#proposition-group-equations",
  "type": "Proposition",
  "number": "3.2.14",
  "title": "",
  "body": "  Let be a group and and be any two elements in . Then the equations and have unique solutions in .    Suppose that . We must show that such an exists. Multiplying both sides of by , we have .  To show uniqueness, suppose that and are both solutions of ; then . So . The proof for the existence and uniqueness of the solution of is similar.   "
},
{
  "id": "proposition-8",
  "level": "2",
  "url": "section-groups-define.html#proposition-8",
  "type": "Proposition",
  "number": "3.2.15",
  "title": "",
  "body": "  If is a group and , then implies and implies .   "
},
{
  "id": "p-438",
  "level": "2",
  "url": "section-groups-define.html#p-438",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right and left cancellation laws "
},
{
  "id": "theorem-exponent-laws",
  "level": "2",
  "url": "section-groups-define.html#theorem-exponent-laws",
  "type": "Theorem",
  "number": "3.2.16",
  "title": "",
  "body": "  In a group, the usual laws of exponents hold; that is, for all ,  for all ;  for all ;  for all . Furthermore, if is abelian, then .    "
},
{
  "id": "section-subgroups",
  "level": "1",
  "url": "section-subgroups.html",
  "type": "Section",
  "number": "3.3",
  "title": "Subgroups",
  "body": " Subgroups   Definitions and Examples  Sometimes we wish to investigate smaller groups sitting inside a larger group. The set of even integers is a group under the operation of addition. This smaller group sits naturally inside of the group of integers under addition. We define a subgroup Subgroup definition of  of a group to be a subset of such that when the group operation of is restricted to , is a group in its own right. Observe that every group with at least two elements will always have at least two subgroups, the subgroup consisting of the identity element alone and the entire group itself. The subgroup of a group is called the trivial subgroup Subgroup trivial . A subgroup that is a proper subset of is called a proper subgroup Subgroup proper . In many of the examples that we have investigated up to this point, there exist other subgroups besides the trivial and improper subgroups.   A Subgroup of the Reals  Consider the set of nonzero real numbers, , with the group operation of multiplication. the multiplicative group of real numbers The identity of this group is 1 and the inverse of any element is just . We will show that is a subgroup of . the multiplicative group of rational numbers The identity of is 1; however, is the quotient of two nonzero integers. Hence, the identity of is in . Given two elements in , say and , their product is also in . The inverse of any element is again in since . Since multiplication in is associative, multiplication in is associative.    A Subgroup of the Nonzero Complex Numbers  Recall that is the multiplicative group of nonzero complex numbers. Let . Then is a subgroup of . It is quite easy to verify that is a group under multiplication and that .    A Subgroup of Matrices With Determinant One  Let be the subset of consisting of matrices of determinant one; that is, a matrix the special linear group  is in exactly when . To show that is a subgroup of the general linear group, we must show that it is a group under matrix multiplication. The identity matrix is in , as is the inverse of the matrix : . It remains to show that multiplication is closed; that is, that the product of two matrices of determinant one also has determinant one. We will leave this task as an exercise. The group is called the special linear group Group special linear .    Groups, Subsets, Operations  It is important to realize that a subset of a group can be a group without being a subgroup of . For to be a subgroup of it must inherit 's binary operation. The set of all matrices, , forms a group under the operation of addition. The general linear group is a subset of and is a group under matrix multiplication, but it is not a subgroup of . If we add two invertible matrices, we do not necessarily obtain another invertible matrix. Observe that , but the zero matrix is not in .    Structurally Different Groups  One way of telling whether or not two groups are the same is by examining their subgroups. Other than the trivial subgroup and the group itself, the group has a single subgroup consisting of the elements 0 and 2. From the group , we can form another group of four elements as follows. As a set this group is . We perform the group operation coordinatewise; that is, . is an addition table for . Since there are three nontrivial proper subgroups of , , , and , and must be different groups.   Addition table for       Some Subgroup Theorems  Let us examine some criteria for determining exactly when a subset of a group is a subgroup.    A subset of is a subgroup if and only if it satisfies the following conditions.  The identity of is in .  If , then .  If , then .     First suppose that is a subgroup of . We must show that the three conditions hold. Since is a group, it must have an identity . We must show that , where is the identity of . We know that and that ; hence, . By right-hand cancellation, . The second condition holds since a subgroup is a group. To prove the third condition, let . Since is a group, there is an element such that . By the uniqueness of the inverse in , .  Conversely, if the three conditions hold, we must show that is a group under the same operation as ; however, these conditions plus the associativity of the binary operation are exactly the axioms stated in the definition of a group.      Let be a subset of a group . Then is a subgroup of if and only if , and whenever then is in .    First assume that is a subgroup of . We wish to show that whenever and are in . Since is in , its inverse must also be in . Because of the closure of the group operation, .  Conversely, suppose that such that and whenever . If , then is in . If , then is also in . Now let . We must show that their product is also in . However, . Hence, is a subgroup of .        Sage  The first half of this text is about group theory. Sage includes Groups, Algorithms and Programming (GAP), a program designed primarly for just group theory, and in continuous development since 1986. Many of Sage's computations for groups ultimately are performed by GAP.    "
},
{
  "id": "p-452",
  "level": "2",
  "url": "section-subgroups.html#p-452",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subgroup trivial subgroup proper subgroup "
},
{
  "id": "example-groups-multiplicative-subgroup",
  "level": "2",
  "url": "section-subgroups.html#example-groups-multiplicative-subgroup",
  "type": "Example",
  "number": "3.3.1",
  "title": "A Subgroup of the Reals.",
  "body": " A Subgroup of the Reals  Consider the set of nonzero real numbers, , with the group operation of multiplication. the multiplicative group of real numbers The identity of this group is 1 and the inverse of any element is just . We will show that is a subgroup of . the multiplicative group of rational numbers The identity of is 1; however, is the quotient of two nonzero integers. Hence, the identity of is in . Given two elements in , say and , their product is also in . The inverse of any element is again in since . Since multiplication in is associative, multiplication in is associative.  "
},
{
  "id": "example-groups-subgroup-h",
  "level": "2",
  "url": "section-subgroups.html#example-groups-subgroup-h",
  "type": "Example",
  "number": "3.3.2",
  "title": "A Subgroup of the Nonzero Complex Numbers.",
  "body": " A Subgroup of the Nonzero Complex Numbers  Recall that is the multiplicative group of nonzero complex numbers. Let . Then is a subgroup of . It is quite easy to verify that is a group under multiplication and that .  "
},
{
  "id": "example-groups-sl2",
  "level": "2",
  "url": "section-subgroups.html#example-groups-sl2",
  "type": "Example",
  "number": "3.3.3",
  "title": "A Subgroup of Matrices With Determinant One.",
  "body": " A Subgroup of Matrices With Determinant One  Let be the subset of consisting of matrices of determinant one; that is, a matrix the special linear group  is in exactly when . To show that is a subgroup of the general linear group, we must show that it is a group under matrix multiplication. The identity matrix is in , as is the inverse of the matrix : . It remains to show that multiplication is closed; that is, that the product of two matrices of determinant one also has determinant one. We will leave this task as an exercise. The group is called the special linear group Group special linear .  "
},
{
  "id": "example-groups-gl2-subgroup",
  "level": "2",
  "url": "section-subgroups.html#example-groups-gl2-subgroup",
  "type": "Example",
  "number": "3.3.4",
  "title": "Groups, Subsets, Operations.",
  "body": " Groups, Subsets, Operations  It is important to realize that a subset of a group can be a group without being a subgroup of . For to be a subgroup of it must inherit 's binary operation. The set of all matrices, , forms a group under the operation of addition. The general linear group is a subset of and is a group under matrix multiplication, but it is not a subgroup of . If we add two invertible matrices, we do not necessarily obtain another invertible matrix. Observe that , but the zero matrix is not in .  "
},
{
  "id": "example-groups-z2xz2",
  "level": "2",
  "url": "section-subgroups.html#example-groups-z2xz2",
  "type": "Example",
  "number": "3.3.5",
  "title": "Structurally Different Groups.",
  "body": " Structurally Different Groups  One way of telling whether or not two groups are the same is by examining their subgroups. Other than the trivial subgroup and the group itself, the group has a single subgroup consisting of the elements 0 and 2. From the group , we can form another group of four elements as follows. As a set this group is . We perform the group operation coordinatewise; that is, . is an addition table for . Since there are three nontrivial proper subgroups of , , , and , and must be different groups.   Addition table for    "
},
{
  "id": "proposition-9",
  "level": "2",
  "url": "section-subgroups.html#proposition-9",
  "type": "Proposition",
  "number": "3.3.7",
  "title": "",
  "body": "  A subset of is a subgroup if and only if it satisfies the following conditions.  The identity of is in .  If , then .  If , then .     First suppose that is a subgroup of . We must show that the three conditions hold. Since is a group, it must have an identity . We must show that , where is the identity of . We know that and that ; hence, . By right-hand cancellation, . The second condition holds since a subgroup is a group. To prove the third condition, let . Since is a group, there is an element such that . By the uniqueness of the inverse in , .  Conversely, if the three conditions hold, we must show that is a group under the same operation as ; however, these conditions plus the associativity of the binary operation are exactly the axioms stated in the definition of a group.   "
},
{
  "id": "proposition-subgroup",
  "level": "2",
  "url": "section-subgroups.html#proposition-subgroup",
  "type": "Proposition",
  "number": "3.3.8",
  "title": "",
  "body": "  Let be a subset of a group . Then is a subgroup of if and only if , and whenever then is in .    First assume that is a subgroup of . We wish to show that whenever and are in . Since is in , its inverse must also be in . Because of the closure of the group operation, .  Conversely, suppose that such that and whenever . If , then is in . If , then is also in . Now let . We must show that their product is also in . However, . Hence, is a subgroup of .   "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "section-subgroups.html#remark-2",
  "type": "Remark",
  "number": "3.3.9",
  "title": "Sage.",
  "body": " Sage  The first half of this text is about group theory. Sage includes Groups, Algorithms and Programming (GAP), a program designed primarly for just group theory, and in continuous development since 1986. Many of Sage's computations for groups ultimately are performed by GAP.  "
},
{
  "id": "groups-sage",
  "level": "1",
  "url": "groups-sage.html",
  "type": "Section",
  "number": "3.4",
  "title": "Sage",
  "body": " Sage   Many of the groups discussed in this chapter are available for study in Sage. It is important to understand that sets that form algebraic objects (groups in this chapter) are called parents in Sage, and elements of these objects are called, well, elements. So every element belongs to a parent (in other words, is contained in some set). We can ask about properties of parents (finite? order? abelian?), and we can ask about properties of individual elements (identity? inverse?). In the following we will show you how to create some of these common groups and begin to explore their properties with Sage.    Integers mod n      We would like to work with elements of Z8 . If you were to type a 6 into a compute cell right now, what would you mean? The integer , the rational number , the real number , or the complex number ? Or perhaps you really do want the integer mod ? Sage really has no idea what you mean or want. To make this clear, you can coerce  6 into Z8 with the syntax Z8(6) . Without this, Sage will treat a input number like 6 as an integer, the simplest possible interpretation in some sense. Study the following carefully, where we first work with normal integers and then with integers mod 8.          Z8 is a bit unusual as a first example, since it has two operations defined, both addition and multiplication, with addition forming a group, and multiplication not forming a group. Still, we can work with the additive portion, here forming the Cayley table for the addition.   When is a prime number, the multipicative structure (excluding zero), will also form a group.  The integers mod are very important, so Sage implements both addition and multiplication together. Groups of symmetries are a better example of how Sage implements groups, since there is just one operation present.     Groups of symmetries   The symmetries of some geometric shapes are already defined in Sage, albeit with different names. They are implemented as permutation groups which we will begin to study carefully in Chapter 5.  Sage uses integers to label vertices, starting the count at 1 , instead of letters. Elements by default are printed using cycle notation which we will see described carefully in Chapter 5. Here is an example, with both the mathematics and Sage. For the Sage part, we create the group of symmetries and then create the symmetry with coercion, followed by outputting the element in cycle notation. Then we create just the bottom row of the notation we are using for permutations.     The final list comprehension deserves comment. The .domain() method gives a lait of the symbols used for the permutation group triangle and then rho2 is employed with syntax like it is a function (it is a function) to create the images that would occupy the bottom row.  With a double list comprehension we can list all six elements of the group in the bottom row format. A good exercise would be to pair up each element with its name as given in .   Different books, different authors, different software all have different ideas about the order in which to write multiplication of functions. This textbook builds on the idea of composition of functions, so that is the composition and it is natural to apply first. Sage takes the opposite view and since we write , Sage will understand that we want to do first. Neither approach is wrong, and neither is necessarily superior, they are just different and there are good arguments for either one. When you consult other books that work with permutation groups, you want to first determine which approach it takes.  The translation here between the text and Sage will be worthwhile practice. Here we will reprise the discussion at the end of , but reverse the order on each product to compute Sage-style and exactly mirror what the text does.      Now that we understand that Sage does multiplication in reverse, we can compute the Cayley table for this group. Default behavior is to just name elements of a group as letters, a, b, c , \\dots{} in the same order that the .list() command would produce the elements of the group. But you can also print the elements in the table as themselves (that uses cycle notation here), or you can give the elements names. We will use u as shorthand for and r as shorthand for .     You should verify that the table above is correct, just like Table 3.2 is correct. Remember that the convention is to multiply a row label times a column label, in that order. However, to do a check across the two tables, you will need to recall the difference in ordering between your textbook and Sage.     Quaternions  Sage implements the quaternions, but the elements are not matrices, but rather are permutations. Despite appearances the structure is identical. It should not matter which version you have in mind (matrices or permutations) if you build the Cayley table and use the default behavior of using letters to name the elements. As permutations, or as letters, can you identify , , and ?    It should be fairly obvious that a is the identity element of the group ( ), either from its behavior in the table, or from its bottom row representation in the list above. And if you prefer, you can ask Sage.   Now should have the property that . We see that the identity element a is on the diagonal of the Cayley table only when we compute c*c . We can verify this easily, borrowing the third bottom row element from the list above. With this information, once we locate , we can easily compute , and so on.   See if you can pair up the letters with all eight elements of the quaternions. Be a bit careful with your names, the symbol I is used by Sage for the imaginary number (which we will use below), but Sage will silently let you redefine it to be anything you like. Same goes for lower-case i . So call your elements of the quaternions something like QI, QJ, QK to avoid confusion.  As we begin to work with groups it is instructive to work with the actual elements. But many properties of groups are totally independent of the order we use for multiplication, or the names or representations we use for the elements. Here are facts about the quaternions we can compute without any knowledge of just how the elements are written or multiplied.        Subgroups  The best techniques for creating subgroups will come in future chapters, but we can create some groups that are naturally subgroups of other groups.  Elements of the quaternions were represented by certain permutations of the integers 1 through 8. We can also build the group of all permutations of these eight integers. It gets pretty big, so do not list it unless you want a lot of output! (I dare you.)   As a demonstration of reusing chunks of Sage code, we duplicate the previous example. But in each case the code lives in an external file, just once. So if you wanted to use setup code in more than one division, you could put it in a file and incorporate it similarly. Here we do not test the second instance, and so do not include expected output either. Typically, you would do this copy somewhere further away. Note that need to supply a path for the file that is relative to the location of teh source file containing the <pretext> element, since the repeated material is source XML .    The quaternions, Q , is a subgroup of the full group of all permutations, the symmetric group or S8 , and Sage regards this as a property of Q .   In Sage the complex numbers are known by the name CC . We can create a list of the elements in the subgroup described in . Then we can verify that this set is a subgroup by examining the Cayley table, using multiplication as the operation.     "
},
{
  "id": "exercises-groups",
  "level": "1",
  "url": "exercises-groups.html",
  "type": "Exercises",
  "number": "3.5",
  "title": "Exercises",
  "body": " Exercises   Find all satisfying each of the following equations.           (a) ; (c) ; (e) .    Which of the following multiplication tables defined on the set form a group? Support your answer in each case.         (a) Not a group; (c) a group.    Write out Cayley tables for groups formed by the symmetries of a rectangle and for . How many elements are in each group? Are the groups the same? Why or why not?    Describe the symmetries of a rhombus and prove that the set of symmetries forms a group. Give Cayley tables for both the symmetries of a rectangle and the symmetries of a rhombus. Are the symmetries of a rectangle and those of a rhombus the same?    Describe the symmetries of a square and prove that the set of symmetries is a group. Give a Cayley table for the symmetries. How many ways can the vertices of a square be permuted? Is each permutation necessarily a symmetry of the square? The symmetry group of the square is denoted by .    Give a multiplication table for the group .      Let and define a binary operation on by . Prove that is an abelian group.    Give an example of two elements and in with .   Pick two matrices. Almost any pair will work.    Prove that the product of two matrices in has determinant one.     Prove that the set of matrices of the form is a group under matrix multiplication. This group, known as the Heisenberg group , is important in quantum physics. Matrix multiplication in the Heisenberg group is defined by    Prove that in . Use this result to show that the binary operation in the group is closed; that is, if and are in , then .    Let . Define a binary operation on by Prove that is a group under this operation. This group is important in algebraic coding theory.    Show that is a group under the operation of multiplication.    Given the groups and , let . Define a binary operation on by . Show that is a group under this operation.    Prove or disprove that every group containing six elements is abelian.   There is a nonabelian group containing six elements.    Give a specific example of some group and elements where .   Look at the symmetry group of an equilateral triangle or a square.    Give an example of three different groups with eight elements. Why are the groups different?   The are five different groups of order 8.    Show that there are permutations of a set containing items.   Let be in . All of the s must be distinct. There are ways to choose , ways to choose , , 2 ways to choose , and only one way to choose . Therefore, we can form in ways.    Show that for all .    Prove that there is a multiplicative identity for the integers modulo :    For each find an element such that    Show that addition and multiplication mod $n$ are well defined operations. That is, show that the operations do not depend on the choice of the representative from the equivalence classes mod .    Show that addition and multiplication mod are associative operations.    Show that multiplication distributes over addition modulo :    Let and be elements in a group . Prove that for .      Let be the group of units in . If , prove that there is an element such that and .    Prove that the inverse of is .    Prove the remainder of : if is a group and , then the equation has a unique solution in .    Prove .    Prove the right and left cancellation laws for a group ; that is, show that in the group , implies and implies for elements .    Show that if for all elements in a group , then must be abelian.   Since , we know that .    Show that if is a finite group of even order, then there is an such that is not the identity and .    Let be a group and suppose that for all and in . Prove that is an abelian group.    Find all the subgroups of . Use this information to show that is not the same group as . (See for a short description of the product of groups.)    Find all the subgroups of the symmetry group of an equilateral triangle.   , , , , , .    Compute the subgroups of the symmetry group of a square.    Let . Show that is a subgroup of .    Let and . Prove that is a subgroup of . Show that these subgroups are the only subgroups of .    Let . Prove that is a subgroup of .    where . Prove that is a subgroup of .    Prove that is a subgroup of under the group operation of multiplication.   The identity of is . Since , is closed under multiplication. Finally, .    Let be the group of matrices under addition and Prove that is a subgroup of .    Prove or disprove: , the set of matrices with integer entries and determinant one, is a subgroup of .    List the subgroups of the quaternion group, .    Prove that the intersection of two subgroups of a group is also a subgroup of .    Prove or disprove: If and are subgroups of a group , then is a subgroup of .   Look at .    Prove or disprove: If and are subgroups of a group , then is a subgroup of . What if is abelian?    Let be a group and . Show that is a subgroup of . This subgroup is called the center of . the center of a group    Let and be elements of a group . If and , prove that .   Since , it must be the case that , and we can conclude that .    Give an example of an infinite group in which every nontrivial subgroup is infinite.      If for all and in , prove that must be abelian.    Prove or disprove: Every proper subgroup of an nonabelian group is nonabelian.    Let be a subgroup of and Prove is a subgroup of . This subgroup is called the centralizer of in .    Let be a subgroup of . If , show that is also a subgroup of .     In each group, how many solutions are there to ?     , odd.         , even.         , odd.         , even.         This is an odd-numbered exercise with tasks.   What is ?       This task has subtasks.   What is ?       What is ?        This is an even-numbered exercise with tasks.   What is ?       This task has subtasks.   What is ?       What is ?       "
},
{
  "id": "exercise-71",
  "level": "2",
  "url": "exercises-groups.html#exercise-71",
  "type": "Exercise",
  "number": "3.5.1",
  "title": "",
  "body": " Find all satisfying each of the following equations.           (a) ; (c) ; (e) .  "
},
{
  "id": "exercise-72",
  "level": "2",
  "url": "exercises-groups.html#exercise-72",
  "type": "Exercise",
  "number": "3.5.2",
  "title": "",
  "body": " Which of the following multiplication tables defined on the set form a group? Support your answer in each case.         (a) Not a group; (c) a group.  "
},
{
  "id": "exercise-groups-rectangle-symmetries",
  "level": "2",
  "url": "exercises-groups.html#exercise-groups-rectangle-symmetries",
  "type": "Exercise",
  "number": "3.5.3",
  "title": "",
  "body": " Write out Cayley tables for groups formed by the symmetries of a rectangle and for . How many elements are in each group? Are the groups the same? Why or why not?  "
},
{
  "id": "exercise-74",
  "level": "2",
  "url": "exercises-groups.html#exercise-74",
  "type": "Exercise",
  "number": "3.5.4",
  "title": "",
  "body": " Describe the symmetries of a rhombus and prove that the set of symmetries forms a group. Give Cayley tables for both the symmetries of a rectangle and the symmetries of a rhombus. Are the symmetries of a rectangle and those of a rhombus the same?  "
},
{
  "id": "exercise-75",
  "level": "2",
  "url": "exercises-groups.html#exercise-75",
  "type": "Exercise",
  "number": "3.5.5",
  "title": "",
  "body": " Describe the symmetries of a square and prove that the set of symmetries is a group. Give a Cayley table for the symmetries. How many ways can the vertices of a square be permuted? Is each permutation necessarily a symmetry of the square? The symmetry group of the square is denoted by .  "
},
{
  "id": "exercise-76",
  "level": "2",
  "url": "exercises-groups.html#exercise-76",
  "type": "Exercise",
  "number": "3.5.6",
  "title": "",
  "body": " Give a multiplication table for the group .    "
},
{
  "id": "exercise-77",
  "level": "2",
  "url": "exercises-groups.html#exercise-77",
  "type": "Exercise",
  "number": "3.5.7",
  "title": "",
  "body": " Let and define a binary operation on by . Prove that is an abelian group.  "
},
{
  "id": "exercise-78",
  "level": "2",
  "url": "exercises-groups.html#exercise-78",
  "type": "Exercise",
  "number": "3.5.8",
  "title": "",
  "body": " Give an example of two elements and in with .   Pick two matrices. Almost any pair will work.  "
},
{
  "id": "exercise-79",
  "level": "2",
  "url": "exercises-groups.html#exercise-79",
  "type": "Exercise",
  "number": "3.5.9",
  "title": "",
  "body": " Prove that the product of two matrices in has determinant one.  "
},
{
  "id": "exercise-80",
  "level": "2",
  "url": "exercises-groups.html#exercise-80",
  "type": "Exercise",
  "number": "3.5.10",
  "title": "",
  "body": " Prove that the set of matrices of the form is a group under matrix multiplication. This group, known as the Heisenberg group , is important in quantum physics. Matrix multiplication in the Heisenberg group is defined by  "
},
{
  "id": "exercise-81",
  "level": "2",
  "url": "exercises-groups.html#exercise-81",
  "type": "Exercise",
  "number": "3.5.11",
  "title": "",
  "body": " Prove that in . Use this result to show that the binary operation in the group is closed; that is, if and are in , then .  "
},
{
  "id": "exercise-82",
  "level": "2",
  "url": "exercises-groups.html#exercise-82",
  "type": "Exercise",
  "number": "3.5.12",
  "title": "",
  "body": " Let . Define a binary operation on by Prove that is a group under this operation. This group is important in algebraic coding theory.  "
},
{
  "id": "exercise-83",
  "level": "2",
  "url": "exercises-groups.html#exercise-83",
  "type": "Exercise",
  "number": "3.5.13",
  "title": "",
  "body": " Show that is a group under the operation of multiplication.  "
},
{
  "id": "exercise-84",
  "level": "2",
  "url": "exercises-groups.html#exercise-84",
  "type": "Exercise",
  "number": "3.5.14",
  "title": "",
  "body": " Given the groups and , let . Define a binary operation on by . Show that is a group under this operation.  "
},
{
  "id": "exercise-85",
  "level": "2",
  "url": "exercises-groups.html#exercise-85",
  "type": "Exercise",
  "number": "3.5.15",
  "title": "",
  "body": " Prove or disprove that every group containing six elements is abelian.   There is a nonabelian group containing six elements.  "
},
{
  "id": "exercise-86",
  "level": "2",
  "url": "exercises-groups.html#exercise-86",
  "type": "Exercise",
  "number": "3.5.16",
  "title": "",
  "body": " Give a specific example of some group and elements where .   Look at the symmetry group of an equilateral triangle or a square.  "
},
{
  "id": "exercise-87",
  "level": "2",
  "url": "exercises-groups.html#exercise-87",
  "type": "Exercise",
  "number": "3.5.17",
  "title": "",
  "body": " Give an example of three different groups with eight elements. Why are the groups different?   The are five different groups of order 8.  "
},
{
  "id": "exercise-88",
  "level": "2",
  "url": "exercises-groups.html#exercise-88",
  "type": "Exercise",
  "number": "3.5.18",
  "title": "",
  "body": " Show that there are permutations of a set containing items.   Let be in . All of the s must be distinct. There are ways to choose , ways to choose , , 2 ways to choose , and only one way to choose . Therefore, we can form in ways.  "
},
{
  "id": "exercise-89",
  "level": "2",
  "url": "exercises-groups.html#exercise-89",
  "type": "Exercise",
  "number": "3.5.19",
  "title": "",
  "body": " Show that for all .  "
},
{
  "id": "exercise-90",
  "level": "2",
  "url": "exercises-groups.html#exercise-90",
  "type": "Exercise",
  "number": "3.5.20",
  "title": "",
  "body": " Prove that there is a multiplicative identity for the integers modulo :  "
},
{
  "id": "exercise-91",
  "level": "2",
  "url": "exercises-groups.html#exercise-91",
  "type": "Exercise",
  "number": "3.5.21",
  "title": "",
  "body": " For each find an element such that  "
},
{
  "id": "exercise-92",
  "level": "2",
  "url": "exercises-groups.html#exercise-92",
  "type": "Exercise",
  "number": "3.5.22",
  "title": "",
  "body": " Show that addition and multiplication mod $n$ are well defined operations. That is, show that the operations do not depend on the choice of the representative from the equivalence classes mod .  "
},
{
  "id": "exercise-93",
  "level": "2",
  "url": "exercises-groups.html#exercise-93",
  "type": "Exercise",
  "number": "3.5.23",
  "title": "",
  "body": " Show that addition and multiplication mod are associative operations.  "
},
{
  "id": "exercise-94",
  "level": "2",
  "url": "exercises-groups.html#exercise-94",
  "type": "Exercise",
  "number": "3.5.24",
  "title": "",
  "body": " Show that multiplication distributes over addition modulo :  "
},
{
  "id": "exercise-95",
  "level": "2",
  "url": "exercises-groups.html#exercise-95",
  "type": "Exercise",
  "number": "3.5.25",
  "title": "",
  "body": " Let and be elements in a group . Prove that for .    "
},
{
  "id": "exercise-96",
  "level": "2",
  "url": "exercises-groups.html#exercise-96",
  "type": "Exercise",
  "number": "3.5.26",
  "title": "",
  "body": " Let be the group of units in . If , prove that there is an element such that and .  "
},
{
  "id": "exercise-97",
  "level": "2",
  "url": "exercises-groups.html#exercise-97",
  "type": "Exercise",
  "number": "3.5.27",
  "title": "",
  "body": " Prove that the inverse of is .  "
},
{
  "id": "exercise-98",
  "level": "2",
  "url": "exercises-groups.html#exercise-98",
  "type": "Exercise",
  "number": "3.5.28",
  "title": "",
  "body": " Prove the remainder of : if is a group and , then the equation has a unique solution in .  "
},
{
  "id": "exercise-99",
  "level": "2",
  "url": "exercises-groups.html#exercise-99",
  "type": "Exercise",
  "number": "3.5.29",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "exercise-100",
  "level": "2",
  "url": "exercises-groups.html#exercise-100",
  "type": "Exercise",
  "number": "3.5.30",
  "title": "",
  "body": " Prove the right and left cancellation laws for a group ; that is, show that in the group , implies and implies for elements .  "
},
{
  "id": "exercise-101",
  "level": "2",
  "url": "exercises-groups.html#exercise-101",
  "type": "Exercise",
  "number": "3.5.31",
  "title": "",
  "body": " Show that if for all elements in a group , then must be abelian.   Since , we know that .  "
},
{
  "id": "exercise-102",
  "level": "2",
  "url": "exercises-groups.html#exercise-102",
  "type": "Exercise",
  "number": "3.5.32",
  "title": "",
  "body": " Show that if is a finite group of even order, then there is an such that is not the identity and .  "
},
{
  "id": "exercise-103",
  "level": "2",
  "url": "exercises-groups.html#exercise-103",
  "type": "Exercise",
  "number": "3.5.33",
  "title": "",
  "body": " Let be a group and suppose that for all and in . Prove that is an abelian group.  "
},
{
  "id": "exercise-104",
  "level": "2",
  "url": "exercises-groups.html#exercise-104",
  "type": "Exercise",
  "number": "3.5.34",
  "title": "",
  "body": " Find all the subgroups of . Use this information to show that is not the same group as . (See for a short description of the product of groups.)  "
},
{
  "id": "exercise-105",
  "level": "2",
  "url": "exercises-groups.html#exercise-105",
  "type": "Exercise",
  "number": "3.5.35",
  "title": "",
  "body": " Find all the subgroups of the symmetry group of an equilateral triangle.   , , , , , .  "
},
{
  "id": "exercise-106",
  "level": "2",
  "url": "exercises-groups.html#exercise-106",
  "type": "Exercise",
  "number": "3.5.36",
  "title": "",
  "body": " Compute the subgroups of the symmetry group of a square.  "
},
{
  "id": "exercise-107",
  "level": "2",
  "url": "exercises-groups.html#exercise-107",
  "type": "Exercise",
  "number": "3.5.37",
  "title": "",
  "body": " Let . Show that is a subgroup of .  "
},
{
  "id": "exercise-108",
  "level": "2",
  "url": "exercises-groups.html#exercise-108",
  "type": "Exercise",
  "number": "3.5.38",
  "title": "",
  "body": " Let and . Prove that is a subgroup of . Show that these subgroups are the only subgroups of .  "
},
{
  "id": "exercise-groups-circle-group",
  "level": "2",
  "url": "exercises-groups.html#exercise-groups-circle-group",
  "type": "Exercise",
  "number": "3.5.39",
  "title": "",
  "body": " Let . Prove that is a subgroup of .  "
},
{
  "id": "exercise-110",
  "level": "2",
  "url": "exercises-groups.html#exercise-110",
  "type": "Exercise",
  "number": "3.5.40",
  "title": "",
  "body": " where . Prove that is a subgroup of .  "
},
{
  "id": "exercise-111",
  "level": "2",
  "url": "exercises-groups.html#exercise-111",
  "type": "Exercise",
  "number": "3.5.41",
  "title": "",
  "body": " Prove that is a subgroup of under the group operation of multiplication.   The identity of is . Since , is closed under multiplication. Finally, .  "
},
{
  "id": "exercise-112",
  "level": "2",
  "url": "exercises-groups.html#exercise-112",
  "type": "Exercise",
  "number": "3.5.42",
  "title": "",
  "body": " Let be the group of matrices under addition and Prove that is a subgroup of .  "
},
{
  "id": "exercise-113",
  "level": "2",
  "url": "exercises-groups.html#exercise-113",
  "type": "Exercise",
  "number": "3.5.43",
  "title": "",
  "body": " Prove or disprove: , the set of matrices with integer entries and determinant one, is a subgroup of .  "
},
{
  "id": "exercise-114",
  "level": "2",
  "url": "exercises-groups.html#exercise-114",
  "type": "Exercise",
  "number": "3.5.44",
  "title": "",
  "body": " List the subgroups of the quaternion group, .  "
},
{
  "id": "exercise-115",
  "level": "2",
  "url": "exercises-groups.html#exercise-115",
  "type": "Exercise",
  "number": "3.5.45",
  "title": "",
  "body": " Prove that the intersection of two subgroups of a group is also a subgroup of .  "
},
{
  "id": "exercise-116",
  "level": "2",
  "url": "exercises-groups.html#exercise-116",
  "type": "Exercise",
  "number": "3.5.46",
  "title": "",
  "body": " Prove or disprove: If and are subgroups of a group , then is a subgroup of .   Look at .  "
},
{
  "id": "exercise-117",
  "level": "2",
  "url": "exercises-groups.html#exercise-117",
  "type": "Exercise",
  "number": "3.5.47",
  "title": "",
  "body": " Prove or disprove: If and are subgroups of a group , then is a subgroup of . What if is abelian?  "
},
{
  "id": "exercise-118",
  "level": "2",
  "url": "exercises-groups.html#exercise-118",
  "type": "Exercise",
  "number": "3.5.48",
  "title": "",
  "body": " Let be a group and . Show that is a subgroup of . This subgroup is called the center of . the center of a group  "
},
{
  "id": "exercise-119",
  "level": "2",
  "url": "exercises-groups.html#exercise-119",
  "type": "Exercise",
  "number": "3.5.49",
  "title": "",
  "body": " Let and be elements of a group . If and , prove that .   Since , it must be the case that , and we can conclude that .  "
},
{
  "id": "exercise-120",
  "level": "2",
  "url": "exercises-groups.html#exercise-120",
  "type": "Exercise",
  "number": "3.5.50",
  "title": "",
  "body": " Give an example of an infinite group in which every nontrivial subgroup is infinite.  "
},
{
  "id": "exercise-121",
  "level": "2",
  "url": "exercises-groups.html#exercise-121",
  "type": "Exercise",
  "number": "3.5.51",
  "title": "",
  "body": " If for all and in , prove that must be abelian.  "
},
{
  "id": "exercise-122",
  "level": "2",
  "url": "exercises-groups.html#exercise-122",
  "type": "Exercise",
  "number": "3.5.52",
  "title": "",
  "body": " Prove or disprove: Every proper subgroup of an nonabelian group is nonabelian.  "
},
{
  "id": "exercise-123",
  "level": "2",
  "url": "exercises-groups.html#exercise-123",
  "type": "Exercise",
  "number": "3.5.53",
  "title": "",
  "body": " Let be a subgroup of and Prove is a subgroup of . This subgroup is called the centralizer of in .  "
},
{
  "id": "exercise-124",
  "level": "2",
  "url": "exercises-groups.html#exercise-124",
  "type": "Exercise",
  "number": "3.5.54",
  "title": "",
  "body": " Let be a subgroup of . If , show that is also a subgroup of .  "
},
{
  "id": "exercise-125",
  "level": "2",
  "url": "exercises-groups.html#exercise-125",
  "type": "Exercise",
  "number": "3.5.55",
  "title": "",
  "body": "  , odd.      "
},
{
  "id": "exercise-126",
  "level": "2",
  "url": "exercises-groups.html#exercise-126",
  "type": "Exercise",
  "number": "3.5.56",
  "title": "",
  "body": "  , even.      "
},
{
  "id": "exercise-127",
  "level": "2",
  "url": "exercises-groups.html#exercise-127",
  "type": "Exercise",
  "number": "3.5.57",
  "title": "",
  "body": "  , odd.      "
},
{
  "id": "exercise-128",
  "level": "2",
  "url": "exercises-groups.html#exercise-128",
  "type": "Exercise",
  "number": "3.5.58",
  "title": "",
  "body": "  , even.      "
},
{
  "id": "exercise-129",
  "level": "2",
  "url": "exercises-groups.html#exercise-129",
  "type": "Exercise",
  "number": "3.5.59",
  "title": "",
  "body": " This is an odd-numbered exercise with tasks.   What is ?       This task has subtasks.   What is ?       What is ?      "
},
{
  "id": "exercise-130",
  "level": "2",
  "url": "exercises-groups.html#exercise-130",
  "type": "Exercise",
  "number": "3.5.60",
  "title": "",
  "body": " This is an even-numbered exercise with tasks.   What is ?       This task has subtasks.   What is ?       What is ?      "
},
{
  "id": "exercises-7",
  "level": "1",
  "url": "exercises-7.html",
  "type": "Exercises",
  "number": "3.6",
  "title": "Additional Exercises: Detecting Errors",
  "body": " Additional Exercises: Detecting Errors       UPC Symbols  Universal Product Code Universal Product Code (UPC) symbols are found on most products in grocery and retail stores. The UPC symbol is a 12-digit code identifying the manufacturer of a product and the product itself ( ). The first 11 digits contain information about the product; the twelfth digit is used for error detection. If is a valid UPC number, then .   Show that the UPC number 0-50000-30042-6, which appears in , is a valid UPC number.  Show that the number 0-50000-30043-6 is not a valid UPC number.  Write a formula to calculate the check digit, , in the UPC number.  The UPC error detection scheme can detect most transposition errors; that is, it can determine if two digits have been interchanged. Show that the transposition error 0-05000-30042-6 is not detected. Find a transposition error that is detected. Can you find a general rule for the types of transposition errors that can be detected?   Write a program that will determine whether or not a UPC number is valid.    A UPC code      It is often useful to use an inner product notation for this type of error detection scheme; hence, we will use the notion to mean .  Suppose that is an error detection scheme for the -digit identification number , where . Prove that all single-digit errors are detected if and only if for .    Let be an error detection scheme for the -digit identification number , where . Prove that all transposition errors of two digits and are detected if and only if for and between 1 and .   ISBN Codes  Every book has an International Standard Book Number International standard book number (ISBN) code. This is a 10-digit code indicating the book's publisher and title. The tenth digit is a check digit satisfying . One problem is that might have to be a 10 to make the inner product zero; in this case, 11 digits would be needed to make this scheme work. Therefore, the character X is used for the eleventh digit. So ISBN 3-540-96035-X is a valid ISBN code.   Is ISBN 0-534-91500-0 a valid ISBN code? What about ISBN 0-534-91700-0 and ISBN 0-534-19500-0?  Does this method detect all single-digit errors? What about all transposition errors?  How many different ISBN codes are there?  Write a computer program that will calculate the check digit for the first nine digits of an ISBN code.  A publisher has houses in Germany and the United States. Its German prefix is 3-540 . If its United States prefix will be 0-abc , find abc such that the rest of the ISBN code will be the same for a book printed in Germany and in the United States. Under the ISBN coding method the first digit identifies the language; German is 3 and English is 0 . The next group of numbers identifies the publisher, and the last group identifies the specific book.    "
},
{
  "id": "exercise-131",
  "level": "2",
  "url": "exercises-7.html#exercise-131",
  "type": "Exercise",
  "number": "3.6.1",
  "title": "UPC Symbols.",
  "body": "UPC Symbols  Universal Product Code Universal Product Code (UPC) symbols are found on most products in grocery and retail stores. The UPC symbol is a 12-digit code identifying the manufacturer of a product and the product itself ( ). The first 11 digits contain information about the product; the twelfth digit is used for error detection. If is a valid UPC number, then .   Show that the UPC number 0-50000-30042-6, which appears in , is a valid UPC number.  Show that the number 0-50000-30043-6 is not a valid UPC number.  Write a formula to calculate the check digit, , in the UPC number.  The UPC error detection scheme can detect most transposition errors; that is, it can determine if two digits have been interchanged. Show that the transposition error 0-05000-30042-6 is not detected. Find a transposition error that is detected. Can you find a general rule for the types of transposition errors that can be detected?   Write a program that will determine whether or not a UPC number is valid.    A UPC code    "
},
{
  "id": "exercise-132",
  "level": "2",
  "url": "exercises-7.html#exercise-132",
  "type": "Exercise",
  "number": "3.6.2",
  "title": "",
  "body": " It is often useful to use an inner product notation for this type of error detection scheme; hence, we will use the notion to mean .  Suppose that is an error detection scheme for the -digit identification number , where . Prove that all single-digit errors are detected if and only if for .  "
},
{
  "id": "exercise-133",
  "level": "2",
  "url": "exercises-7.html#exercise-133",
  "type": "Exercise",
  "number": "3.6.3",
  "title": "",
  "body": " Let be an error detection scheme for the -digit identification number , where . Prove that all transposition errors of two digits and are detected if and only if for and between 1 and .  "
},
{
  "id": "exercise-134",
  "level": "2",
  "url": "exercises-7.html#exercise-134",
  "type": "Exercise",
  "number": "3.6.4",
  "title": "ISBN Codes.",
  "body": "ISBN Codes  Every book has an International Standard Book Number International standard book number (ISBN) code. This is a 10-digit code indicating the book's publisher and title. The tenth digit is a check digit satisfying . One problem is that might have to be a 10 to make the inner product zero; in this case, 11 digits would be needed to make this scheme work. Therefore, the character X is used for the eleventh digit. So ISBN 3-540-96035-X is a valid ISBN code.   Is ISBN 0-534-91500-0 a valid ISBN code? What about ISBN 0-534-91700-0 and ISBN 0-534-19500-0?  Does this method detect all single-digit errors? What about all transposition errors?  How many different ISBN codes are there?  Write a computer program that will calculate the check digit for the first nine digits of an ISBN code.  A publisher has houses in Germany and the United States. Its German prefix is 3-540 . If its United States prefix will be 0-abc , find abc such that the rest of the ISBN code will be the same for a book printed in Germany and in the United States. Under the ISBN coding method the first digit identifies the language; German is 3 and English is 0 . The next group of numbers identifies the publisher, and the last group identifies the specific book.   "
},
{
  "id": "groups-sage-exercises",
  "level": "1",
  "url": "groups-sage-exercises.html",
  "type": "Exercises",
  "number": "3.7",
  "title": "Sage Exercises",
  "body": " Sage Exercises   These exercises are about becoming comfortable working with groups in Sage.    Create the groups CyclicPermutationGroup(8) and DihedralGroup(4) and name these groups C and D , respectively. We will understand these constructions better shortly, but for now just understand that both objects you create are actually groups.    Check that C and D have the same size by using the .order() method. Determine which group is abelian, and which is not, by using the .is_abelian() method.    Use the .cayley_table() method to create the Cayley table for each group.    Write a nicely formatted discussion identifying differences between the two groups that are discernible in properties of their Cayley tables. In other words, what is {\\em different} about these two groups that you can see in the Cayley tables? (In the Sage notebook, a Shift-click on a blue bar will bring up a mini-word-processor, and you can use use dollar signs to embed mathematics formatted using tex syntax.)    For C locate the one subgroup of order . The group D has three subgroups of order . Select one of the three subgroups of D that has a different structure than the subgroup you obtained from C .  The .subgroups() method will give you a list of all of the subgroups to help you get started. A Cayley table will help you tell the difference between the two subgroups. What properties of these tables did you use to determine the difference in the structure of the subgroups?    The .subgroup(elt_list) method of a group will create the smallest subgroup containing the specified elements of the group, when given the elements as a list elt_list . Use this command to discover the shortest list of elements necessary to recreate the subgroups you found in the previous exercise. The equality comparison, == , can be used to test if two subgroups are equal.   "
},
{
  "id": "exercise-135",
  "level": "2",
  "url": "groups-sage-exercises.html#exercise-135",
  "type": "Exercise",
  "number": "3.7.1",
  "title": "",
  "body": " Create the groups CyclicPermutationGroup(8) and DihedralGroup(4) and name these groups C and D , respectively. We will understand these constructions better shortly, but for now just understand that both objects you create are actually groups.  "
},
{
  "id": "exercise-136",
  "level": "2",
  "url": "groups-sage-exercises.html#exercise-136",
  "type": "Exercise",
  "number": "3.7.2",
  "title": "",
  "body": " Check that C and D have the same size by using the .order() method. Determine which group is abelian, and which is not, by using the .is_abelian() method.  "
},
{
  "id": "exercise-137",
  "level": "2",
  "url": "groups-sage-exercises.html#exercise-137",
  "type": "Exercise",
  "number": "3.7.3",
  "title": "",
  "body": " Use the .cayley_table() method to create the Cayley table for each group.  "
},
{
  "id": "exercise-138",
  "level": "2",
  "url": "groups-sage-exercises.html#exercise-138",
  "type": "Exercise",
  "number": "3.7.4",
  "title": "",
  "body": " Write a nicely formatted discussion identifying differences between the two groups that are discernible in properties of their Cayley tables. In other words, what is {\\em different} about these two groups that you can see in the Cayley tables? (In the Sage notebook, a Shift-click on a blue bar will bring up a mini-word-processor, and you can use use dollar signs to embed mathematics formatted using tex syntax.)  "
},
{
  "id": "exercise-139",
  "level": "2",
  "url": "groups-sage-exercises.html#exercise-139",
  "type": "Exercise",
  "number": "3.7.5",
  "title": "",
  "body": " For C locate the one subgroup of order . The group D has three subgroups of order . Select one of the three subgroups of D that has a different structure than the subgroup you obtained from C .  The .subgroups() method will give you a list of all of the subgroups to help you get started. A Cayley table will help you tell the difference between the two subgroups. What properties of these tables did you use to determine the difference in the structure of the subgroups?  "
},
{
  "id": "exercise-140",
  "level": "2",
  "url": "groups-sage-exercises.html#exercise-140",
  "type": "Exercise",
  "number": "3.7.6",
  "title": "",
  "body": " The .subgroup(elt_list) method of a group will create the smallest subgroup containing the specified elements of the group, when given the elements as a list elt_list . Use this command to discover the shortest list of elements necessary to recreate the subgroups you found in the previous exercise. The equality comparison, == , can be used to test if two subgroups are equal.  "
},
{
  "id": "references-3",
  "level": "1",
  "url": "references-3.html",
  "type": "References",
  "number": "3.8",
  "title": "References and Suggested Readings",
  "body": "  References and Suggested Readings     Burnside, W. Theory of Groups of Finite Order . 2nd ed. Cambridge University Press, Cambridge, 1911; Dover, New York, 1953. A classic. Also available at books.google.com.   Gallian, J. A. and Winters, S. Modular Arithmetic in the Marketplace,  The American Mathematical Monthly  95 (1988): 548 51.    Gallian, J. A. Contemporary Abstract Algebra . 7th ed. Brooks\/Cole, Belmont, CA, 2009.    Hall, M. Theory of Groups . 2nd ed. American Mathematical Society, Providence, 1959.    Kurosh, A. E. The Theory of Groups , vols. I and II. American Mathematical Society, Providence, 1979.       Rotman, J. J. An Introduction to the Theory of Groups . 4th ed. Springer, New York, 1995.  "
},
{
  "id": "section-11",
  "level": "1",
  "url": "section-11.html",
  "type": "Section",
  "number": "4.1",
  "title": "Cyclic groups",
  "body": " Cyclic groups  Often a subgroup will depend entirely on a single element of the group; that is, knowing that particular element will allow us to compute any other element in the subgroup.    An Infinite Cyclic Subgroup, Modular Addition  Suppose that we consider and look at all multiples (both positive and negative) of 3. As a set, this is . It is easy to see that is a subgroup of the integers. This subgroup is completely determined by the element 3 since we can obtain all of the other elements of the group by taking multiples of 3. Every element in the subgroup is generated by 3.    An Infinite Cyclic Subgroup, Multiplication of Rational Numbers  If , then is a subgroup of the multiplicative group of nonzero rational numbers, . If and are in , then is also in . By , is a subgroup of determined by the element 2.     Let be a group and be any element in . Then the set is a subgroup of . Furthermore, is the smallest subgroup of that contains~ .   cyclic group generated by     The identity is in since . If and are any two elements in , then by the definition of we can write and for some integers and . So is again in . Finally, if in , then the inverse is also in . Clearly, any subgroup of containing must contain all the powers of by closure; hence, contains . Therefore, is the smallest subgroup of containing .     If we are using the + notation, as in the case of the integers under addition, we write .   For , we call the cyclic subgroup Subgroup cyclic generated by . If contains some element such that , then is a cyclic group Group cyclic . In this case is a generator Generator of a cyclic subgroup of . If is an element of a group , we define the order Element order of of to be the smallest positive integer such that , and we write . the order of an element If there is no such integer , we say that the order of is infinite and write to denote the order of .   Generators of a Finite Cyclic Group  Notice that a cyclic group can have more than a single generator. Both 1 and 5 generate ; hence, is a cyclic group. Not every element in a cyclic group is necessarily a generator of the group. The order of is 3. The cyclic subgroup generated by 2 is .   The groups and are cyclic groups. The elements 1 and are generators for . We can certainly generate with 1 although there may be other generators of , as in the case of .   A Cyclic Group of Units  The group of units, , in is a cyclic group. As a set, is . The element 2 is a generator for since .    A Group That is Not Cyclic  Not every group is a cyclic group. Consider the symmetry group of an equilateral triangle . The subgroups of are shown in . Notice that every subgroup is cyclic; however, no single element generates the entire group.    Subgroups of         Every cyclic group is abelian.    Let be a cyclic group and be a generator for . If and are in , then they can be written as powers of , say and . Since , is abelian.    "
},
{
  "id": "example-cyclic-z3",
  "level": "2",
  "url": "section-11.html#example-cyclic-z3",
  "type": "Example",
  "number": "4.1.1",
  "title": "An Infinite Cyclic Subgroup, Modular Addition.",
  "body": " An Infinite Cyclic Subgroup, Modular Addition  Suppose that we consider and look at all multiples (both positive and negative) of 3. As a set, this is . It is easy to see that is a subgroup of the integers. This subgroup is completely determined by the element 3 since we can obtain all of the other elements of the group by taking multiples of 3. Every element in the subgroup is generated by 3.  "
},
{
  "id": "example-cyclic-2n",
  "level": "2",
  "url": "section-11.html#example-cyclic-2n",
  "type": "Example",
  "number": "4.1.2",
  "title": "An Infinite Cyclic Subgroup, Multiplication of Rational Numbers.",
  "body": " An Infinite Cyclic Subgroup, Multiplication of Rational Numbers  If , then is a subgroup of the multiplicative group of nonzero rational numbers, . If and are in , then is also in . By , is a subgroup of determined by the element 2.  "
},
{
  "id": "theorem-cyclic-subgroup",
  "level": "2",
  "url": "section-11.html#theorem-cyclic-subgroup",
  "type": "Theorem",
  "number": "4.1.3",
  "title": "",
  "body": "  Let be a group and be any element in . Then the set is a subgroup of . Furthermore, is the smallest subgroup of that contains~ .   cyclic group generated by     The identity is in since . If and are any two elements in , then by the definition of we can write and for some integers and . So is again in . Finally, if in , then the inverse is also in . Clearly, any subgroup of containing must contain all the powers of by closure; hence, contains . Therefore, is the smallest subgroup of containing .   "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "section-11.html#remark-3",
  "type": "Remark",
  "number": "4.1.4",
  "title": "",
  "body": " If we are using the + notation, as in the case of the integers under addition, we write .  "
},
{
  "id": "p-626",
  "level": "2",
  "url": "section-11.html#p-626",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cyclic subgroup cyclic group generator order "
},
{
  "id": "example-cyclic-z6",
  "level": "2",
  "url": "section-11.html#example-cyclic-z6",
  "type": "Example",
  "number": "4.1.5",
  "title": "Generators of a Finite Cyclic Group.",
  "body": " Generators of a Finite Cyclic Group  Notice that a cyclic group can have more than a single generator. Both 1 and 5 generate ; hence, is a cyclic group. Not every element in a cyclic group is necessarily a generator of the group. The order of is 3. The cyclic subgroup generated by 2 is .  "
},
{
  "id": "example-cyclic-u9",
  "level": "2",
  "url": "section-11.html#example-cyclic-u9",
  "type": "Example",
  "number": "4.1.6",
  "title": "A Cyclic Group of Units.",
  "body": " A Cyclic Group of Units  The group of units, , in is a cyclic group. As a set, is . The element 2 is a generator for since .  "
},
{
  "id": "example-cyclic-s3-not-cyclic",
  "level": "2",
  "url": "section-11.html#example-cyclic-s3-not-cyclic",
  "type": "Example",
  "number": "4.1.7",
  "title": "A Group That is Not Cyclic.",
  "body": " A Group That is Not Cyclic  Not every group is a cyclic group. Consider the symmetry group of an equilateral triangle . The subgroups of are shown in . Notice that every subgroup is cyclic; however, no single element generates the entire group.  "
},
{
  "id": "figure-subgrps-s3",
  "level": "2",
  "url": "section-11.html#figure-subgrps-s3",
  "type": "Figure",
  "number": "4.1.8",
  "title": "",
  "body": " Subgroups of      "
},
{
  "id": "theorem-cyclic-abelian",
  "level": "2",
  "url": "section-11.html#theorem-cyclic-abelian",
  "type": "Theorem",
  "number": "4.1.9",
  "title": "",
  "body": "  Every cyclic group is abelian.    Let be a cyclic group and be a generator for . If and are in , then they can be written as powers of , say and . Since , is abelian.   "
},
{
  "id": "section-12",
  "level": "1",
  "url": "section-12.html",
  "type": "Section",
  "number": "4.2",
  "title": "Subgroups of a Cyclic Group",
  "body": " Subgroups of a Cyclic Group  We can ask some interesting questions about cyclic subgroups of a group and subgroups of a cyclic group. If is a group, which subgroups of are cyclic? If is a cyclic group, what type of subgroups does possess?    Every subgroup of a cyclic group is cyclic.    The main tools used in this proof are the division algorithm and the Principle of Well-Ordering. Let be a cyclic group generated by and suppose that is a subgroup of . If , then trivially is cyclic. Suppose that contains some other element distinct from the identity. Then can be written as for some integer . Since is a subgroup, must also be in . Since either or is positive, we can assume that contains positive powers of and . Let be the smallest natural number such that . Such an exists by the Principle of Well-Ordering.  We claim that is a generator for . We must show that every can be written as a power of . Since and is a subgroup of , for some integer . Using the division algorithm, we can find numbers and such that where ; hence, . So . Since and are in , must also be in . However, was the smallest positive number such that was in ; consequently, and so . Therefore, and is generated by .      The subgroups of are exactly for .      Let be a cyclic group of order and suppose that is a generator for . Then if and only if divides .    First suppose that . By the division algorithm, where ; hence, . Since the smallest positive integer such that is , .  Conversely, if divides , then for some integer . Consequently, .      Let be a cyclic group of order and suppose that is a generator of the group. If , then the order of is , where .    We wish to find the smallest integer such that . By , this is the smallest integer such that divides or, equivalently, divides . Since is the greatest common divisor of and , and are relatively prime. Hence, for to divide it must divide . The smallest such is .      The generators of are the integers such that and .     A Finite Cyclic Group of Order  Let us examine the group . The numbers 1, 3, 5, 7, 9, 11, 13, and 15 are the elements of that are relatively prime to 16. Each of these elements generates . For example, .   "
},
{
  "id": "theorem-cyclic-subgroups",
  "level": "2",
  "url": "section-12.html#theorem-cyclic-subgroups",
  "type": "Theorem",
  "number": "4.2.1",
  "title": "",
  "body": "  Every subgroup of a cyclic group is cyclic.    The main tools used in this proof are the division algorithm and the Principle of Well-Ordering. Let be a cyclic group generated by and suppose that is a subgroup of . If , then trivially is cyclic. Suppose that contains some other element distinct from the identity. Then can be written as for some integer . Since is a subgroup, must also be in . Since either or is positive, we can assume that contains positive powers of and . Let be the smallest natural number such that . Such an exists by the Principle of Well-Ordering.  We claim that is a generator for . We must show that every can be written as a power of . Since and is a subgroup of , for some integer . Using the division algorithm, we can find numbers and such that where ; hence, . So . Since and are in , must also be in . However, was the smallest positive number such that was in ; consequently, and so . Therefore, and is generated by .   "
},
{
  "id": "corollary-3",
  "level": "2",
  "url": "section-12.html#corollary-3",
  "type": "Corollary",
  "number": "4.2.2",
  "title": "",
  "body": "  The subgroups of are exactly for .   "
},
{
  "id": "proposition-cyclic-subgrp-order",
  "level": "2",
  "url": "section-12.html#proposition-cyclic-subgrp-order",
  "type": "Proposition",
  "number": "4.2.3",
  "title": "",
  "body": "  Let be a cyclic group of order and suppose that is a generator for . Then if and only if divides .    First suppose that . By the division algorithm, where ; hence, . Since the smallest positive integer such that is , .  Conversely, if divides , then for some integer . Consequently, .   "
},
{
  "id": "theorem-cyclic-orders",
  "level": "2",
  "url": "section-12.html#theorem-cyclic-orders",
  "type": "Theorem",
  "number": "4.2.4",
  "title": "",
  "body": "  Let be a cyclic group of order and suppose that is a generator of the group. If , then the order of is , where .    We wish to find the smallest integer such that . By , this is the smallest integer such that divides or, equivalently, divides . Since is the greatest common divisor of and , and are relatively prime. Hence, for to divide it must divide . The smallest such is .   "
},
{
  "id": "corollary-cyclic-modngenerators",
  "level": "2",
  "url": "section-12.html#corollary-cyclic-modngenerators",
  "type": "Corollary",
  "number": "4.2.5",
  "title": "",
  "body": "  The generators of are the integers such that and .   "
},
{
  "id": "example-cyclic-z16",
  "level": "2",
  "url": "section-12.html#example-cyclic-z16",
  "type": "Example",
  "number": "4.2.6",
  "title": "A Finite Cyclic Group of Order <span class=\"process-math\">\\(16\\)<\/span>.",
  "body": " A Finite Cyclic Group of Order  Let us examine the group . The numbers 1, 3, 5, 7, 9, 11, 13, and 15 are the elements of that are relatively prime to 16. Each of these elements generates . For example, .  "
},
{
  "id": "section-13",
  "level": "1",
  "url": "section-13.html",
  "type": "Section",
  "number": "4.3",
  "title": "Cyclic Groups of Complex Numbers",
  "body": " Cyclic Groups of Complex Numbers  The complex numbers are defined as , where . If , then is the real part of and is the imaginary part of .  To add two complex numbers and , we just add the corresponding real and imaginary parts: . Remembering that , we multiply complex numbers just like polynomials. The product of and is .  Every nonzero complex number has a multiplicative inverse; that is, there exists a such that . If , then . The complex conjugate Conjugate, complex of a complex number is defined to be . The absolute value or modulus of is .   Complex Number Operations  Let and . Then and . Also, .    Rectangular coordinates of a complex number       There are several ways of graphically representing complex numbers. We can represent a complex number as an ordered pair on the plane where is the (or real) coordinate and is the (or imaginary) coordinate. This is called the rectangular or Cartesian representation. The rectangular representations of , , and are depicted in .   Polar coordinates of a complex number       Nonzero complex numbers can also be represented using polar coordinates . To specify any nonzero point on the plane, it suffices to give an angle from the positive axis in the counterclockwise direction and a distance from the origin, as in . We can see that . Hence, and . We sometimes abbreviate as . To assure that the representation of is well-defined, we also require that . If the measurement is in radians, then .      Complex Numbers in Polar Form  Suppose that . Then and . Hence, the rectangular representation is .  Conversely, if we are given a rectangular representation of a complex number, it is often useful to know the number's polar representation. If , then and , so .   The polar representation of a complex number makes it easy to find products and powers of complex numbers. The proof of the following proposition is straightforward and is left as an exercise.    Let and be two nonzero complex numbers. Then .     Multiplication of Complex Numbers in Polar Form  If and , then .    DeMoivre  DeMoivre's Theorem   Let be a nonzero complex number. Then for .    We will use induction on (see ). For the theorem is trivial. Assume that the theorem is true for all such that . Then .     Powers of Complex Numbers  Suppose that and we wish to compute . Rather than computing directly, it is much easier to switch to polar coordinates and calculate using DeMoivre's Theorem: .   The multiplicative group of the complex numbers, , possesses some interesting subgroups. Whereas and have no interesting subgroups of finite order, has many. We first consider the circle group Group circle , . The following proposition is a direct result of .   the circle group     The circle group is a subgroup of .    Although the circle group has infinite order, it has many interesting finite subgroups. Suppose that . Then is a subgroup of the circle group. Also, , , , and are exactly those complex numbers that satisfy the equation . The complex numbers satisfying the equation are called the th roots of unity th root of unity .    If , then the th roots of unity are , where . Furthermore, the th roots of unity form a cyclic subgroup of of order    By DeMoivre's Theorem, . The 's are distinct since the numbers are all distinct and are greater than or equal to 0 but less than . We will leave the proof that the th roots of unity form a cyclic subgroup of as an exercise.    A generator for the group of the th roots of unity is called a primitive th root of unity Primitive th root of unity .   Roots of Unity  The 8th roots of unity can be represented as eight equally spaced points on the unit circle ( ). The primitive 8th roots of unity are    8th roots of unity       We interrupt this exposition to repeat the previous diagram, wrapped as different figure with a different caption. The TikZ code to produce these diagrams lives in an external file, tikz\/cyclic-roots-unity.tex , which is pure text, freed from any need to format for XML processing. So, in particular, there is no need to escape ampersands and angle brackets, nor is there employment of the CDATA mechanism. But the real value is that there is just one version to edit, and any changes will be reflected in both copies.   Repeat: 8th roots of unity      "
},
{
  "id": "p-645",
  "level": "2",
  "url": "section-13.html#p-645",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex numbers real part imaginary part "
},
{
  "id": "p-647",
  "level": "2",
  "url": "section-13.html#p-647",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex conjugate absolute value modulus "
},
{
  "id": "example-cyclic-complex-add",
  "level": "2",
  "url": "section-13.html#example-cyclic-complex-add",
  "type": "Example",
  "number": "4.3.1",
  "title": "Complex Number Operations.",
  "body": " Complex Number Operations  Let and . Then and . Also, .  "
},
{
  "id": "figure-rectcoord",
  "level": "2",
  "url": "section-13.html#figure-rectcoord",
  "type": "Figure",
  "number": "4.3.2",
  "title": "",
  "body": " Rectangular coordinates of a complex number      "
},
{
  "id": "p-649",
  "level": "2",
  "url": "section-13.html#p-649",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rectangular Cartesian "
},
{
  "id": "figure-polarcoord",
  "level": "2",
  "url": "section-13.html#figure-polarcoord",
  "type": "Figure",
  "number": "4.3.3",
  "title": "",
  "body": " Polar coordinates of a complex number      "
},
{
  "id": "p-650",
  "level": "2",
  "url": "section-13.html#p-650",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polar coordinates "
},
{
  "id": "example-cyclic-polar",
  "level": "2",
  "url": "section-13.html#example-cyclic-polar",
  "type": "Example",
  "number": "4.3.4",
  "title": "Complex Numbers in Polar Form.",
  "body": " Complex Numbers in Polar Form  Suppose that . Then and . Hence, the rectangular representation is .  Conversely, if we are given a rectangular representation of a complex number, it is often useful to know the number's polar representation. If , then and , so .  "
},
{
  "id": "proposition-polar-mult",
  "level": "2",
  "url": "section-13.html#proposition-polar-mult",
  "type": "Proposition",
  "number": "4.3.5",
  "title": "",
  "body": "  Let and be two nonzero complex numbers. Then .   "
},
{
  "id": "example-cyclic-polar-mult",
  "level": "2",
  "url": "section-13.html#example-cyclic-polar-mult",
  "type": "Example",
  "number": "4.3.6",
  "title": "Multiplication of Complex Numbers in Polar Form.",
  "body": " Multiplication of Complex Numbers in Polar Form  If and , then .  "
},
{
  "id": "theorem-demoivre",
  "level": "2",
  "url": "section-13.html#theorem-demoivre",
  "type": "Theorem",
  "number": "4.3.7",
  "title": "DeMoivre.",
  "body": " DeMoivre  DeMoivre's Theorem   Let be a nonzero complex number. Then for .    We will use induction on (see ). For the theorem is trivial. Assume that the theorem is true for all such that . Then .   "
},
{
  "id": "example-50",
  "level": "2",
  "url": "section-13.html#example-50",
  "type": "Example",
  "number": "4.3.8",
  "title": "Powers of Complex Numbers.",
  "body": " Powers of Complex Numbers  Suppose that and we wish to compute . Rather than computing directly, it is much easier to switch to polar coordinates and calculate using DeMoivre's Theorem: .  "
},
{
  "id": "p-659",
  "level": "2",
  "url": "section-13.html#p-659",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circle group "
},
{
  "id": "proposition-13",
  "level": "2",
  "url": "section-13.html#proposition-13",
  "type": "Proposition",
  "number": "4.3.9",
  "title": "",
  "body": "  The circle group is a subgroup of .   "
},
{
  "id": "p-661",
  "level": "2",
  "url": "section-13.html#p-661",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "th roots of unity "
},
{
  "id": "theorem-16",
  "level": "2",
  "url": "section-13.html#theorem-16",
  "type": "Theorem",
  "number": "4.3.10",
  "title": "",
  "body": "  If , then the th roots of unity are , where . Furthermore, the th roots of unity form a cyclic subgroup of of order    By DeMoivre's Theorem, . The 's are distinct since the numbers are all distinct and are greater than or equal to 0 but less than . We will leave the proof that the th roots of unity form a cyclic subgroup of as an exercise.   "
},
{
  "id": "p-664",
  "level": "2",
  "url": "section-13.html#p-664",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "primitive th root of unity "
},
{
  "id": "example-roots_unity",
  "level": "2",
  "url": "section-13.html#example-roots_unity",
  "type": "Example",
  "number": "4.3.11",
  "title": "Roots of Unity.",
  "body": " Roots of Unity  The 8th roots of unity can be represented as eight equally spaced points on the unit circle ( ). The primitive 8th roots of unity are  "
},
{
  "id": "figure-rtsunity",
  "level": "2",
  "url": "section-13.html#figure-rtsunity",
  "type": "Figure",
  "number": "4.3.12",
  "title": "",
  "body": " 8th roots of unity      "
},
{
  "id": "figure-rtsunity-copy",
  "level": "2",
  "url": "section-13.html#figure-rtsunity-copy",
  "type": "Figure",
  "number": "4.3.13",
  "title": "",
  "body": " Repeat: 8th roots of unity     "
},
{
  "id": "section-14",
  "level": "1",
  "url": "section-14.html",
  "type": "Section",
  "number": "4.4",
  "title": "Large Powers of Integers",
  "body": " Large Powers of Integers  Computing large powers can be very time-consuming. Just as anyone can compute or , everyone knows how to compute . However, such numbers are so large that we do not want to attempt the calculations; moreover, past a certain point the computations would not be feasible even if we had every computer in the world at our disposal. Even writing down the decimal representation of a very large number may not be reasonable. It could be thousands or even millions of digits long. However, if we could compute something like , we could very easily write the result down since it would be a number between 0 and 46,388. If we want to compute powers modulo quickly and efficiently, we will have to be clever. The results in this section are needed only in (not really).  The first thing to notice is that any number can be written as the sum of distinct powers of 2; that is, we can write , where . This is just the binary representation of . For example, the binary representation of 57 is 111001, since we can write .  The laws of exponents still work in ; that is, if and , then . We can compute in multiplications by computing . Each step involves squaring the answer obtained in the previous step, dividing by , and taking the remainder.   Repeated Squares  We will compute . Notice that ; hence, computing is the same as computing . So it will suffice to compute where . It is very easy to see that . We can square this result to obtain a value for : . We are using the fact that . Continuing, we can calculate and . Therefore, .    The method of repeated squares will prove to be a very useful tool when we explore RSA cryptography. To encode and decode messages in a reasonable manner under this scheme, it is necessary to be able to quickly compute large powers of integers mod .   Sage  Sage support for cyclic groups is a little spotty but we can still make effective use of Sage and perhaps this situation could change soon.   "
},
{
  "id": "example-cyclic-repeated-squares",
  "level": "2",
  "url": "section-14.html#example-cyclic-repeated-squares",
  "type": "Example",
  "number": "4.4.1",
  "title": "Repeated Squares.",
  "body": " Repeated Squares  We will compute . Notice that ; hence, computing is the same as computing . So it will suffice to compute where . It is very easy to see that . We can square this result to obtain a value for : . We are using the fact that . Continuing, we can calculate and . Therefore, .  "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "section-14.html#remark-4",
  "type": "Remark",
  "number": "4.4.2",
  "title": "Sage.",
  "body": " Sage  Sage support for cyclic groups is a little spotty but we can still make effective use of Sage and perhaps this situation could change soon.  "
},
{
  "id": "exercises-cyclic",
  "level": "1",
  "url": "exercises-cyclic.html",
  "type": "Exercises",
  "number": "4.5",
  "title": "Exercises",
  "body": " Exercises   Prove or disprove each of the following statements.   All of the generators of are prime.  is cyclic.  is cyclic.  If every proper subgroup of a group is cyclic, then is a cyclic group.  A group with a finite number of subgroups is finite.     Find the order of each of the following elements.       72 in  312 in     List all of the elements in each of the following subgroups.   The subgroup of generated by 7  The subgroup of generated by 15  All subgroups of  All subgroups of  All subgroups of  All subgroups of  The subgroup generated by 3 in  The subgroup generated by 5 in  The subgroup of generated by 7  The subgroup of generated by where  The subgroup of generated by  The subgroup of generated by  The subgroup of generated by     Find the subgroups of generated by each of the following matrices.            Find the order of every element in .    Find the order of every element in the symmetry group of the square, .    What are all of the cyclic subgroups of the quaternion group, ?    List all of the cyclic subgroups of .    List every generator of each subgroup of order 8 in .    Find all elements of finite order in each of the following groups. Here the indicates the set with zero removed.         If in a group , what are the possible orders of ?    Find a cyclic group with exactly one generator. Can you find cyclic groups with exactly two generators? Four generators? How about generators?    For , which groups are cyclic? Make a conjecture as to what is true in general. Can you prove your conjecture?    Let be elements in . Show that and have finite orders but does not.    Evaluate each of the following.            Convert the following complex numbers to the form .          Change the following complex numbers to polar representation.            Calculate each of the following expressions.             Prove each of the following statements.            List and graph the 6th roots of unity. What are the generators of this group? What are the primitive 6th roots of unity?    List and graph the 5th roots of unity. What are the generators of this group? What are the primitive 5th roots of unity?    Calculate each of the following.          Let . Prove the following statements.   The order of is the same as the order of .  For all , .  The order of is the same as the order of .     Let and be distinct primes. How many generators does have?    Let be prime and be a positive integer. How many generators does have?    Prove that has no nontrivial subgroups if is prime.    If and have orders 15 and 16 respectively in a group , what is the order of ?    Let be an element in a group . What is a generator for the subgroup ?    Prove that has an even number of generators for .    Suppose that is a group and let , . Prove that if and with , then .     Let be an abelian group. Show that the elements of finite order in form a subgroup. This subgroup is called the torsion subgroup of .    Let be a finite cyclic group of order generated by . Show that if where , then must be a generator of .    If is an abelian group that contains a pair of cyclic subgroups of order 2, show that must contain a subgroup of order 4. Does this subgroup have to be cyclic?    Let be an abelian group of order where . If contains elements and of order and respectively, then show that is cyclic.    Prove that the subgroups of are exactly for .    Prove that the generators of are the integers such that and .    Prove that if has no proper nontrivial subgroups, then is a cyclic group.    Prove that the order of an element in a cyclic group must divide the order of the group.    Prove that if is a cyclic group of order and , then must have a subgroup of order .    For what integers is an th root of unity?    If and are two nonzero complex numbers, show that    Prove that the circle group is a subgroup of .    Prove that the th roots of unity form a cyclic subgroup of of order .    Let . Prove that and if and only if for .    Let . If , prove that the order of is infinite.    Let be in where . Prove that the order of is infinite.   "
},
{
  "id": "exercise-141",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-141",
  "type": "Exercise",
  "number": "4.5.1",
  "title": "",
  "body": " Prove or disprove each of the following statements.   All of the generators of are prime.  is cyclic.  is cyclic.  If every proper subgroup of a group is cyclic, then is a cyclic group.  A group with a finite number of subgroups is finite.   "
},
{
  "id": "exercise-142",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-142",
  "type": "Exercise",
  "number": "4.5.2",
  "title": "",
  "body": " Find the order of each of the following elements.       72 in  312 in   "
},
{
  "id": "exercise-143",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-143",
  "type": "Exercise",
  "number": "4.5.3",
  "title": "",
  "body": " List all of the elements in each of the following subgroups.   The subgroup of generated by 7  The subgroup of generated by 15  All subgroups of  All subgroups of  All subgroups of  All subgroups of  The subgroup generated by 3 in  The subgroup generated by 5 in  The subgroup of generated by 7  The subgroup of generated by where  The subgroup of generated by  The subgroup of generated by  The subgroup of generated by   "
},
{
  "id": "exercise-144",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-144",
  "type": "Exercise",
  "number": "4.5.4",
  "title": "",
  "body": " Find the subgroups of generated by each of the following matrices.          "
},
{
  "id": "exercise-145",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-145",
  "type": "Exercise",
  "number": "4.5.5",
  "title": "",
  "body": " Find the order of every element in .  "
},
{
  "id": "exercise-146",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-146",
  "type": "Exercise",
  "number": "4.5.6",
  "title": "",
  "body": " Find the order of every element in the symmetry group of the square, .  "
},
{
  "id": "exercise-147",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-147",
  "type": "Exercise",
  "number": "4.5.7",
  "title": "",
  "body": " What are all of the cyclic subgroups of the quaternion group, ?  "
},
{
  "id": "exercise-148",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-148",
  "type": "Exercise",
  "number": "4.5.8",
  "title": "",
  "body": " List all of the cyclic subgroups of .  "
},
{
  "id": "exercise-149",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-149",
  "type": "Exercise",
  "number": "4.5.9",
  "title": "",
  "body": " List every generator of each subgroup of order 8 in .  "
},
{
  "id": "exercise-150",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-150",
  "type": "Exercise",
  "number": "4.5.10",
  "title": "",
  "body": " Find all elements of finite order in each of the following groups. Here the indicates the set with zero removed.       "
},
{
  "id": "exercise-151",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-151",
  "type": "Exercise",
  "number": "4.5.11",
  "title": "",
  "body": " If in a group , what are the possible orders of ?  "
},
{
  "id": "exercise-152",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-152",
  "type": "Exercise",
  "number": "4.5.12",
  "title": "",
  "body": " Find a cyclic group with exactly one generator. Can you find cyclic groups with exactly two generators? Four generators? How about generators?  "
},
{
  "id": "exercise-153",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-153",
  "type": "Exercise",
  "number": "4.5.13",
  "title": "",
  "body": " For , which groups are cyclic? Make a conjecture as to what is true in general. Can you prove your conjecture?  "
},
{
  "id": "exercise-154",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-154",
  "type": "Exercise",
  "number": "4.5.14",
  "title": "",
  "body": " Let be elements in . Show that and have finite orders but does not.  "
},
{
  "id": "exercise-155",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-155",
  "type": "Exercise",
  "number": "4.5.15",
  "title": "",
  "body": " Evaluate each of the following.          "
},
{
  "id": "exercise-156",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-156",
  "type": "Exercise",
  "number": "4.5.16",
  "title": "",
  "body": " Convert the following complex numbers to the form .        "
},
{
  "id": "exercise-157",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-157",
  "type": "Exercise",
  "number": "4.5.17",
  "title": "",
  "body": " Change the following complex numbers to polar representation.          "
},
{
  "id": "exercise-158",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-158",
  "type": "Exercise",
  "number": "4.5.18",
  "title": "",
  "body": " Calculate each of the following expressions.           "
},
{
  "id": "exercise-159",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-159",
  "type": "Exercise",
  "number": "4.5.19",
  "title": "",
  "body": " Prove each of the following statements.          "
},
{
  "id": "exercise-160",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-160",
  "type": "Exercise",
  "number": "4.5.20",
  "title": "",
  "body": " List and graph the 6th roots of unity. What are the generators of this group? What are the primitive 6th roots of unity?  "
},
{
  "id": "exercise-161",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-161",
  "type": "Exercise",
  "number": "4.5.21",
  "title": "",
  "body": " List and graph the 5th roots of unity. What are the generators of this group? What are the primitive 5th roots of unity?  "
},
{
  "id": "exercise-162",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-162",
  "type": "Exercise",
  "number": "4.5.22",
  "title": "",
  "body": " Calculate each of the following.        "
},
{
  "id": "exercise-163",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-163",
  "type": "Exercise",
  "number": "4.5.23",
  "title": "",
  "body": " Let . Prove the following statements.   The order of is the same as the order of .  For all , .  The order of is the same as the order of .   "
},
{
  "id": "exercise-164",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-164",
  "type": "Exercise",
  "number": "4.5.24",
  "title": "",
  "body": " Let and be distinct primes. How many generators does have?  "
},
{
  "id": "exercise-165",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-165",
  "type": "Exercise",
  "number": "4.5.25",
  "title": "",
  "body": " Let be prime and be a positive integer. How many generators does have?  "
},
{
  "id": "exercise-166",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-166",
  "type": "Exercise",
  "number": "4.5.26",
  "title": "",
  "body": " Prove that has no nontrivial subgroups if is prime.  "
},
{
  "id": "exercise-167",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-167",
  "type": "Exercise",
  "number": "4.5.27",
  "title": "",
  "body": " If and have orders 15 and 16 respectively in a group , what is the order of ?  "
},
{
  "id": "exercise-168",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-168",
  "type": "Exercise",
  "number": "4.5.28",
  "title": "",
  "body": " Let be an element in a group . What is a generator for the subgroup ?  "
},
{
  "id": "exercise-169",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-169",
  "type": "Exercise",
  "number": "4.5.29",
  "title": "",
  "body": " Prove that has an even number of generators for .  "
},
{
  "id": "exercise-170",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-170",
  "type": "Exercise",
  "number": "4.5.30",
  "title": "",
  "body": " Suppose that is a group and let , . Prove that if and with , then .  "
},
{
  "id": "exercise-171",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-171",
  "type": "Exercise",
  "number": "4.5.31",
  "title": "",
  "body": " Let be an abelian group. Show that the elements of finite order in form a subgroup. This subgroup is called the torsion subgroup of .  "
},
{
  "id": "exercise-172",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-172",
  "type": "Exercise",
  "number": "4.5.32",
  "title": "",
  "body": " Let be a finite cyclic group of order generated by . Show that if where , then must be a generator of .  "
},
{
  "id": "exercise-173",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-173",
  "type": "Exercise",
  "number": "4.5.33",
  "title": "",
  "body": " If is an abelian group that contains a pair of cyclic subgroups of order 2, show that must contain a subgroup of order 4. Does this subgroup have to be cyclic?  "
},
{
  "id": "exercise-174",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-174",
  "type": "Exercise",
  "number": "4.5.34",
  "title": "",
  "body": " Let be an abelian group of order where . If contains elements and of order and respectively, then show that is cyclic.  "
},
{
  "id": "exercise-175",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-175",
  "type": "Exercise",
  "number": "4.5.35",
  "title": "",
  "body": " Prove that the subgroups of are exactly for .  "
},
{
  "id": "exercise-176",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-176",
  "type": "Exercise",
  "number": "4.5.36",
  "title": "",
  "body": " Prove that the generators of are the integers such that and .  "
},
{
  "id": "exercise-177",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-177",
  "type": "Exercise",
  "number": "4.5.37",
  "title": "",
  "body": " Prove that if has no proper nontrivial subgroups, then is a cyclic group.  "
},
{
  "id": "exercise-178",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-178",
  "type": "Exercise",
  "number": "4.5.38",
  "title": "",
  "body": " Prove that the order of an element in a cyclic group must divide the order of the group.  "
},
{
  "id": "cyclic-exercise-subgroups-exist",
  "level": "2",
  "url": "exercises-cyclic.html#cyclic-exercise-subgroups-exist",
  "type": "Exercise",
  "number": "4.5.39",
  "title": "",
  "body": " Prove that if is a cyclic group of order and , then must have a subgroup of order .  "
},
{
  "id": "exercise-180",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-180",
  "type": "Exercise",
  "number": "4.5.40",
  "title": "",
  "body": " For what integers is an th root of unity?  "
},
{
  "id": "exercise-181",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-181",
  "type": "Exercise",
  "number": "4.5.41",
  "title": "",
  "body": " If and are two nonzero complex numbers, show that  "
},
{
  "id": "exercise-182",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-182",
  "type": "Exercise",
  "number": "4.5.42",
  "title": "",
  "body": " Prove that the circle group is a subgroup of .  "
},
{
  "id": "exercise-183",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-183",
  "type": "Exercise",
  "number": "4.5.43",
  "title": "",
  "body": " Prove that the th roots of unity form a cyclic subgroup of of order .  "
},
{
  "id": "exercise-184",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-184",
  "type": "Exercise",
  "number": "4.5.44",
  "title": "",
  "body": " Let . Prove that and if and only if for .  "
},
{
  "id": "exercise-185",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-185",
  "type": "Exercise",
  "number": "4.5.45",
  "title": "",
  "body": " Let . If , prove that the order of is infinite.  "
},
{
  "id": "exercise-186",
  "level": "2",
  "url": "exercises-cyclic.html#exercise-186",
  "type": "Exercise",
  "number": "4.5.46",
  "title": "",
  "body": " Let be in where . Prove that the order of is infinite.  "
},
{
  "id": "exercises-10",
  "level": "1",
  "url": "exercises-10.html",
  "type": "Exercises",
  "number": "4.6",
  "title": "Programming Exercises",
  "body": " Programming Exercises   Write a computer program that will write any decimal number as the sum of distinct powers of 2. What is the largest integer that your program will handle?    Write a computer program to calculate by the method of repeated squares. What are the largest values of and that your program will accept?   "
},
{
  "id": "exercise-187",
  "level": "2",
  "url": "exercises-10.html#exercise-187",
  "type": "Exercise",
  "number": "4.6.1",
  "title": "",
  "body": " Write a computer program that will write any decimal number as the sum of distinct powers of 2. What is the largest integer that your program will handle?  "
},
{
  "id": "exercise-188",
  "level": "2",
  "url": "exercises-10.html#exercise-188",
  "type": "Exercise",
  "number": "4.6.2",
  "title": "",
  "body": " Write a computer program to calculate by the method of repeated squares. What are the largest values of and that your program will accept?  "
},
{
  "id": "cyclic-sage-exercises",
  "level": "1",
  "url": "cyclic-sage-exercises.html",
  "type": "Exercises",
  "number": "4.7",
  "title": "Sage Exercises",
  "body": " Sage Exercises   This group of exercises is about the group of units mod , , which is sometimes cyclic, sometimes not. There are some commands in Sage that will answer some of these questions very quickly, but instead of using those now, just use the basic techniques described. The idea here is to just work with elements, and lists of elements, to discern the subgroup structure of these groups.    Execute the statement R = Integers(40) to create the set [0,1,2,...,39] This is a group under addition mod , which we will ignore. Instead we are interested in the subset of elements which have an inverse under multiplication mod . Determine how big this subgroup is by executing the command R.unit_group_order() , and then obtain a list of these elements with R.list_of_elements_of_multiplicative_group() .    You can create elements of this group by coercing regular integers into U , such as with the statement a = U(7) . (Don't confuse this with our mathematical notation .) This will tell Sage that you want to view as an element of , subject to the corresponding operations. Determine the elements of the cyclic subgroup of generated by with a list comprehension as follows:   What is the order of in ?    The group is cyclic. Using only the Sage commands described previously, use Sage to find a generator for this group. Now using only theorems about the structure of cyclic groups, describe each of the subgroups of by specifying its order and by giving an explicit generator. Do not repeat any of the subgroups in other words, present each subgroup exactly once. You can use Sage to check your work on the subgroups, but your answer about the subgroups should rely only on theorems and be a nicely written paragraph with a table, etc.    The group is not cyclic. Again, using only the Sage commands described previously, use computations to provide irrefutable evidence of this. How many of the different subgroups of can you list?    Again, using only the Sage commands described previously, explore the structure of for various values of and see if you can formulate an interesting conjecture about some basic property of this group. (Yes, this is a very open-ended question, but this is ultimately the real power of exploring mathematics with Sage.)   "
},
{
  "id": "exercise-189",
  "level": "2",
  "url": "cyclic-sage-exercises.html#exercise-189",
  "type": "Exercise",
  "number": "4.7.1",
  "title": "",
  "body": " Execute the statement R = Integers(40) to create the set [0,1,2,...,39] This is a group under addition mod , which we will ignore. Instead we are interested in the subset of elements which have an inverse under multiplication mod . Determine how big this subgroup is by executing the command R.unit_group_order() , and then obtain a list of these elements with R.list_of_elements_of_multiplicative_group() .  "
},
{
  "id": "exercise-190",
  "level": "2",
  "url": "cyclic-sage-exercises.html#exercise-190",
  "type": "Exercise",
  "number": "4.7.2",
  "title": "",
  "body": " You can create elements of this group by coercing regular integers into U , such as with the statement a = U(7) . (Don't confuse this with our mathematical notation .) This will tell Sage that you want to view as an element of , subject to the corresponding operations. Determine the elements of the cyclic subgroup of generated by with a list comprehension as follows:   What is the order of in ?  "
},
{
  "id": "exercise-191",
  "level": "2",
  "url": "cyclic-sage-exercises.html#exercise-191",
  "type": "Exercise",
  "number": "4.7.3",
  "title": "",
  "body": " The group is cyclic. Using only the Sage commands described previously, use Sage to find a generator for this group. Now using only theorems about the structure of cyclic groups, describe each of the subgroups of by specifying its order and by giving an explicit generator. Do not repeat any of the subgroups in other words, present each subgroup exactly once. You can use Sage to check your work on the subgroups, but your answer about the subgroups should rely only on theorems and be a nicely written paragraph with a table, etc.  "
},
{
  "id": "exercise-192",
  "level": "2",
  "url": "cyclic-sage-exercises.html#exercise-192",
  "type": "Exercise",
  "number": "4.7.4",
  "title": "",
  "body": " The group is not cyclic. Again, using only the Sage commands described previously, use computations to provide irrefutable evidence of this. How many of the different subgroups of can you list?  "
},
{
  "id": "exercise-193",
  "level": "2",
  "url": "cyclic-sage-exercises.html#exercise-193",
  "type": "Exercise",
  "number": "4.7.5",
  "title": "",
  "body": " Again, using only the Sage commands described previously, explore the structure of for various values of and see if you can formulate an interesting conjecture about some basic property of this group. (Yes, this is a very open-ended question, but this is ultimately the real power of exploring mathematics with Sage.)  "
},
{
  "id": "references-4",
  "level": "1",
  "url": "references-4.html",
  "type": "References",
  "number": "4.8",
  "title": "References and Suggested Readings",
  "body": " References and Suggested Readings    Koblitz, N. A Course in Number Theory and Cryptography . 2nd ed. Springer, New York, 1994.   Pomerance, C. Cryptology and Computational Number Theory An Introduction, in Cryptology and Computational Number Theory , Pomerance, C., ed. Proceedings of Symposia in Applied Mathematics, vol. 42, American Mathematical Society, Providence, RI, 1990. Thisbook gives an excellent account of how the method of repeated squares is used in cryptography.  "
},
{
  "id": "activecode",
  "level": "1",
  "url": "activecode.html",
  "type": "Section",
  "number": "5.1",
  "title": "ActiveCode",
  "body": " ActiveCode  Python programs are made interactive in HTML, on request.   An interactive Python program, using Runestone   print(\"Hello, World!\")    A C program will only be interactive if hosted on a Runestone server.   An C program, interactive on a Runestone server   #include <stdio.h> int main(void) { puts(\"Hello, world!\"); }    A Java program will only be interactive if hosted on a Runestone server.   Informal Java Hello, World  A Java program, interactive on a Runestone server   \"hi\" in Java  import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }    Javascript programs are made interactive in HTML, on request.   An interactive JavaScript program, using Runestone   document.write('Hello, world!');    A <program> is not interactive, by default, no matter where it is hosted.   A static Java program   import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }    An Octave program will only be interactive if hosted on a Runestone server. Octave is meant to be a drop-in replacement for Matlab.   A simple Octave program   x = 2 + 2 printf(\"%d\\n\", x)    A language not supported by Runestone Services will be rendered static.   A Pascal program that cannot be interactive on Runestone   program HelloWorld; begin WriteLn('Hello, world!'); end.    The following Python program is in a <listing> since we will want to reference it shortly. The program does not do very much, it just defines four variables whose values are lists of statistics. It should run, and there will be no syntax errors, but it is a bit boring since there is no output.   A Python program that defines some statistics   loan_amount = [1250.0, 500.0, 1450.0, 200.0, 700.0, 100.0, 250.0, 225.0, 1200.0, 150.0, 600.0, 300.0, 700.0, 125.0, 650.0, 175.0, 1800.0, 1525.0, 575.0, 700.0, 1450.0, 400.0, 200.0, 1000.0, 350.0] country_name = ['Azerbaijan', 'El Salvador', 'Bolivia', 'Paraguay', 'El Salvador', 'Philippines', 'Philippines', 'Nicaragua', 'Guatemala', 'Philippines', 'Paraguay', 'Philippines', 'Bolivia', 'Philippines', 'Philippines', 'Madagascar', 'Georgia', 'Uganda', 'Kenya', 'Tajikistan', 'Jordan', 'Kenya', 'Philippines', 'Ecuador', 'Kenya'] time_to_raise = [193075.0, 1157108.0, 1552939.0, 244945.0, 238797.0, 1248909.0, 773599.0, 116181.0, 2288095.0, 51668.0, 26717.0, 48030.0, 1839190.0, 71117.0, 580401.0, 800427.0, 1156218.0, 1166045.0, 2924705.0, 470622.0, 24078.0, 260044.0, 445938.0, 201408.0, 2370450.0] num_lenders_total = [38, 18, 51, 3, 21, 1, 10, 8, 42, 1, 18, 6, 28, 5, 16, 7, 54, 1, 18, 22, 36, 12, 8, 24, 8]    Now a programming exercise. The program upcoming is going to include all the code of the program preceding. This is accomplished with an include attribute on the including program whose value is the xml:id of the included program. So by running the next program, it should pass all of its three tests (for example another example using unit tests, see ). Now reload the page, do not run the program in the listing, and then see that the program in the exercise still runs correctly.  You'll see nothing that tells the reader that the one chunk of code is prefacing the other. And in static formats it might be even less obvious. So you will want to say something to alert the reader. Here it is easy: includes all the code from .  A Python program, including another  Compute the total amount of money loaned and store it in the variable loan_total .   loan_total = 0 for loan in loan_amount: loan_total += loan print(loan_total)  from unittest.gui import TestCaseGui class MyTests(TestCaseGui): def testOne(self): self.assertTrue('loan_total' in self.getEditorText(), \"you need a loan_total variable\") self.assertEqual(loan_total, sum(loan_amount), \"Use the accumulator pattern to add up all the loans\") self.assertFalse('sum(' in self.getEditorText(), \"you may not use sum()\") MyTests().main()   Exact same exercise again, but now we include two programs. We first get the simple Hello, world! program at and then the same program defining the variables with lists of statistics at . So the output just includes the extra result from the print() statement.  A Python program, including two others  Compute the total amount of money loaned and store it in the variable loan_total .   loan_total = 0 for loan in loan_amount: loan_total += loan print(loan_total)  from unittest.gui import TestCaseGui class MyTests(TestCaseGui): def testOne(self): self.assertTrue('loan_total' in self.getEditorText(), \"you need a loan_total variable\") self.assertEqual(loan_total, sum(loan_amount), \"Use the accumulator pattern to add up all the loans\") self.assertFalse('sum(' in self.getEditorText(), \"you may not use sum\") MyTests().main()   A nonsense paragraph just to check on spacing. A nonsense paragraph just to check on spacing. A nonsense paragraph just to check on spacing. A nonsense paragraph just to check on spacing.  "
},
{
  "id": "program-activecode-python",
  "level": "2",
  "url": "activecode.html#program-activecode-python",
  "type": "Listing",
  "number": "5.1.1",
  "title": "",
  "body": " An interactive Python program, using Runestone   print(\"Hello, World!\")   "
},
{
  "id": "program-activecode-c",
  "level": "2",
  "url": "activecode.html#program-activecode-c",
  "type": "Listing",
  "number": "5.1.2",
  "title": "",
  "body": " An C program, interactive on a Runestone server   #include <stdio.h> int main(void) { puts(\"Hello, world!\"); }   "
},
{
  "id": "program-activecode-java",
  "level": "2",
  "url": "activecode.html#program-activecode-java",
  "type": "Listing",
  "number": "5.1.3",
  "title": "Informal Java “Hello, World”",
  "body": " Informal Java Hello, World  A Java program, interactive on a Runestone server   \"hi\" in Java  import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }   "
},
{
  "id": "program-activecode-javascript",
  "level": "2",
  "url": "activecode.html#program-activecode-javascript",
  "type": "Listing",
  "number": "5.1.4",
  "title": "",
  "body": " An interactive JavaScript program, using Runestone   document.write('Hello, world!');   "
},
{
  "id": "program-static-java",
  "level": "2",
  "url": "activecode.html#program-static-java",
  "type": "Listing",
  "number": "5.1.5",
  "title": "",
  "body": " A static Java program   import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }   "
},
{
  "id": "program-activecode-octave",
  "level": "2",
  "url": "activecode.html#program-activecode-octave",
  "type": "Listing",
  "number": "5.1.6",
  "title": "",
  "body": " A simple Octave program   x = 2 + 2 printf(\"%d\\n\", x)   "
},
{
  "id": "program-mistake-pascal",
  "level": "2",
  "url": "activecode.html#program-mistake-pascal",
  "type": "Listing",
  "number": "5.1.7",
  "title": "",
  "body": " A Pascal program that cannot be interactive on Runestone   program HelloWorld; begin WriteLn('Hello, world!'); end.   "
},
{
  "id": "listing-python-included",
  "level": "2",
  "url": "activecode.html#listing-python-included",
  "type": "Listing",
  "number": "5.1.8",
  "title": "",
  "body": " A Python program that defines some statistics   loan_amount = [1250.0, 500.0, 1450.0, 200.0, 700.0, 100.0, 250.0, 225.0, 1200.0, 150.0, 600.0, 300.0, 700.0, 125.0, 650.0, 175.0, 1800.0, 1525.0, 575.0, 700.0, 1450.0, 400.0, 200.0, 1000.0, 350.0] country_name = ['Azerbaijan', 'El Salvador', 'Bolivia', 'Paraguay', 'El Salvador', 'Philippines', 'Philippines', 'Nicaragua', 'Guatemala', 'Philippines', 'Paraguay', 'Philippines', 'Bolivia', 'Philippines', 'Philippines', 'Madagascar', 'Georgia', 'Uganda', 'Kenya', 'Tajikistan', 'Jordan', 'Kenya', 'Philippines', 'Ecuador', 'Kenya'] time_to_raise = [193075.0, 1157108.0, 1552939.0, 244945.0, 238797.0, 1248909.0, 773599.0, 116181.0, 2288095.0, 51668.0, 26717.0, 48030.0, 1839190.0, 71117.0, 580401.0, 800427.0, 1156218.0, 1166045.0, 2924705.0, 470622.0, 24078.0, 260044.0, 445938.0, 201408.0, 2370450.0] num_lenders_total = [38, 18, 51, 3, 21, 1, 10, 8, 42, 1, 18, 6, 28, 5, 16, 7, 54, 1, 18, 22, 36, 12, 8, 24, 8]   "
},
{
  "id": "p-806",
  "level": "2",
  "url": "activecode.html#p-806",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "include "
},
{
  "id": "exercise-python-including",
  "level": "2",
  "url": "activecode.html#exercise-python-including",
  "type": "Checkpoint",
  "number": "5.1.9",
  "title": "A Python program, including another.",
  "body": "A Python program, including another  Compute the total amount of money loaned and store it in the variable loan_total .   loan_total = 0 for loan in loan_amount: loan_total += loan print(loan_total)  from unittest.gui import TestCaseGui class MyTests(TestCaseGui): def testOne(self): self.assertTrue('loan_total' in self.getEditorText(), \"you need a loan_total variable\") self.assertEqual(loan_total, sum(loan_amount), \"Use the accumulator pattern to add up all the loans\") self.assertFalse('sum(' in self.getEditorText(), \"you may not use sum()\") MyTests().main()  "
},
{
  "id": "exercise-python-including-two",
  "level": "2",
  "url": "activecode.html#exercise-python-including-two",
  "type": "Checkpoint",
  "number": "5.1.10",
  "title": "A Python program, including two others.",
  "body": "A Python program, including two others  Compute the total amount of money loaned and store it in the variable loan_total .   loan_total = 0 for loan in loan_amount: loan_total += loan print(loan_total)  from unittest.gui import TestCaseGui class MyTests(TestCaseGui): def testOne(self): self.assertTrue('loan_total' in self.getEditorText(), \"you need a loan_total variable\") self.assertEqual(loan_total, sum(loan_amount), \"Use the accumulator pattern to add up all the loans\") self.assertFalse('sum(' in self.getEditorText(), \"you may not use sum\") MyTests().main()  "
},
{
  "id": "code-lens",
  "level": "1",
  "url": "code-lens.html",
  "type": "Section",
  "number": "5.2",
  "title": "Code Lens",
  "body": " Code Lens  CodeLens is an interactive tool for following program execution, much like a debugger, without the ability to influence flow control or variable values. For use without a server, traces must be computed beforehand. First, we have some trivial programs, to provide minimal testing.   A Python program, stepable with CodeLens   print('Hello, World!')     An C program, stepable with CodeLens   #include <stdio.h> int main(void) { puts(\"Hello, World!\"); }     A Java program, stepable with CodeLens   public class HelloWorld { public static void main(String[] args) { System.out.println(\"Hello, World!\"); } }    Now some moderately more complicated programs to find teh prime numbers less than . We do not vouch for the quality of these, or even their correctness!   Sieve of Eratosthenes , Java   def SieveOfEratosthenes(n): # array of type boolean with True values in it prime = [True for i in range(n + 1)] p = 2 while (p * p <= n): # If it remain unchanged it is prime if (prime[p] == True): # updating all the multiples for i in range(p * 2, n + 1, p): prime[i] = False p += 1 prime[0]= False prime[1]= False # Print for p in range(n + 1): if prime[p]: print (p,end=\" \") # main if __name__=='__main__': n = 20 print (\"The prime numbers smaller than or equal to\", n,\"is\") SieveOfEratosthenes(n)     Sieve of Eratosthenes , C++   #include <stdio.h> const int len = 20; int main() { int arr[20] = {0}; for (int i = 2; i < len; i++) { for (int j = i * i; j < len; j+=i) { arr[j - 1] = 1; } } for (int i = 1; i < len; i++) { if (arr[i - 1] == 0) printf(\" %d\", i); } }     Sieve of Eratosthenes , Java   public class SievePrimeFactors { public static void main(String args[]) { int num = 20; boolean[] bool = new boolean[num]; for (int i = 0; i< bool.length; i++) { bool[i] = true; } for (int i = 2; i < Math.sqrt(num); i++) { if(bool[i] == true) { for(int j = (i*i); j < num; j = j+i) { bool[j] = false; } } } System.out.println(\"List of prime numbers: \"); for (int i = 2; i< bool.length; i++) { if(bool[i]==true) { System.out.println(i); } } } }    "
},
{
  "id": "program-codelens-python",
  "level": "2",
  "url": "code-lens.html#program-codelens-python",
  "type": "Listing",
  "number": "5.2.1",
  "title": "",
  "body": " A Python program, stepable with CodeLens   print('Hello, World!')   "
},
{
  "id": "program-codelens-c",
  "level": "2",
  "url": "code-lens.html#program-codelens-c",
  "type": "Listing",
  "number": "5.2.2",
  "title": "",
  "body": " An C program, stepable with CodeLens   #include <stdio.h> int main(void) { puts(\"Hello, World!\"); }   "
},
{
  "id": "program-codelens-java",
  "level": "2",
  "url": "code-lens.html#program-codelens-java",
  "type": "Listing",
  "number": "5.2.3",
  "title": "",
  "body": " A Java program, stepable with CodeLens   public class HelloWorld { public static void main(String[] args) { System.out.println(\"Hello, World!\"); } }   "
},
{
  "id": "sieve-python",
  "level": "2",
  "url": "code-lens.html#sieve-python",
  "type": "Listing",
  "number": "5.2.4",
  "title": "",
  "body": " Sieve of Eratosthenes , Java   def SieveOfEratosthenes(n): # array of type boolean with True values in it prime = [True for i in range(n + 1)] p = 2 while (p * p <= n): # If it remain unchanged it is prime if (prime[p] == True): # updating all the multiples for i in range(p * 2, n + 1, p): prime[i] = False p += 1 prime[0]= False prime[1]= False # Print for p in range(n + 1): if prime[p]: print (p,end=\" \") # main if __name__=='__main__': n = 20 print (\"The prime numbers smaller than or equal to\", n,\"is\") SieveOfEratosthenes(n)   "
},
{
  "id": "sieve-cpp",
  "level": "2",
  "url": "code-lens.html#sieve-cpp",
  "type": "Listing",
  "number": "5.2.5",
  "title": "",
  "body": " Sieve of Eratosthenes , C++   #include <stdio.h> const int len = 20; int main() { int arr[20] = {0}; for (int i = 2; i < len; i++) { for (int j = i * i; j < len; j+=i) { arr[j - 1] = 1; } } for (int i = 1; i < len; i++) { if (arr[i - 1] == 0) printf(\" %d\", i); } }   "
},
{
  "id": "sieve-java",
  "level": "2",
  "url": "code-lens.html#sieve-java",
  "type": "Listing",
  "number": "5.2.6",
  "title": "",
  "body": " Sieve of Eratosthenes , Java   public class SievePrimeFactors { public static void main(String args[]) { int num = 20; boolean[] bool = new boolean[num]; for (int i = 0; i< bool.length; i++) { bool[i] = true; } for (int i = 2; i < Math.sqrt(num); i++) { if(bool[i] == true) { for(int j = (i*i); j < num; j = j+i) { bool[j] = false; } } } System.out.println(\"List of prime numbers: \"); for (int i = 2; i< bool.length; i++) { if(bool[i]==true) { System.out.println(i); } } } }   "
},
{
  "id": "coding-exercises",
  "level": "1",
  "url": "coding-exercises.html",
  "type": "Section",
  "number": "5.3",
  "title": "Coding Exercises",
  "body": " Coding Exercises  Program listings can be more that just live demonstrations, they can be exercises. The first two also occur in the sample article where they just get a static rendering, if at all.  Inline Coding Exercise, No Help  An exercise might ask a reader to write a computer program, that would go here in the <statement> . But you can also add a <program> element after a <statement> . Here we place no code at all, but we do say we want it to be interactive. The purpose is to make it a live coding environment for a version of your output that allows the reader to perhaps submit a solution. The <program> element is necessary so you can specify a programming language.  In interactive formats, try creating and running a Python program below. Use CodeLens to step through the program.  We didn't really ask you to do anything.  Inline Coding Exercise, Partial  Similar to above, but we provide a starting point for the exercise.   #include <stdio.h> int main(void)   We're not really sure. But it would begin as follows:   #include <stdio.h> int main(void)     Activity Coding Exercise   Similar to above, but now as a complete Python program inside an <activity> . This demonstrates the possibility to use any project-like block ( <project> , <activity> , <exploration> , <investigation> ), but not in the case when structured with <task> .    for i in range(10): print(i)   We're still not really sure.   An Exercise with a Static Program  Similar to above, again, but we place the <program> element inside the <statement> , not after it as a peer. This signals that this is not a coding exercise and the program will render static, since it is explicitly labeled as not being interactive.   #include <stdio.h> int main(void)   We're not really sure. Still.  Coding Exercise, with Unit Tests  Fix the following code so that it always correctly adds two numbers. [Ed. Unit test support is experimental.]   def add(a,b): return 4  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(add(2,2), 4, \"Adding two identical integers\") self.assertEqual(add(7,13), 20, \"Adding two different integers\") self.assertAlmostEqual(add(2.0,3.0), 5.0, 5, \"Adding two decimal numbers\") myTests().main()   We're not really sure. But it would begin as follows:   #include <stdio.h> int main(void)    "
},
{
  "id": "coding-exercise-blank",
  "level": "2",
  "url": "coding-exercises.html#coding-exercise-blank",
  "type": "Checkpoint",
  "number": "5.3.1",
  "title": "Inline Coding Exercise, No Help.",
  "body": "Inline Coding Exercise, No Help  An exercise might ask a reader to write a computer program, that would go here in the <statement> . But you can also add a <program> element after a <statement> . Here we place no code at all, but we do say we want it to be interactive. The purpose is to make it a live coding environment for a version of your output that allows the reader to perhaps submit a solution. The <program> element is necessary so you can specify a programming language.  In interactive formats, try creating and running a Python program below. Use CodeLens to step through the program.  We didn't really ask you to do anything. "
},
{
  "id": "coding-exercise-partial-one",
  "level": "2",
  "url": "coding-exercises.html#coding-exercise-partial-one",
  "type": "Checkpoint",
  "number": "5.3.2",
  "title": "Inline Coding Exercise, Partial.",
  "body": "Inline Coding Exercise, Partial  Similar to above, but we provide a starting point for the exercise.   #include <stdio.h> int main(void)   We're not really sure. But it would begin as follows:   #include <stdio.h> int main(void)   "
},
{
  "id": "coding-exercise-partial-two",
  "level": "2",
  "url": "coding-exercises.html#coding-exercise-partial-two",
  "type": "Activity",
  "number": "5.3.1",
  "title": "Activity Coding Exercise.",
  "body": " Activity Coding Exercise   Similar to above, but now as a complete Python program inside an <activity> . This demonstrates the possibility to use any project-like block ( <project> , <activity> , <exploration> , <investigation> ), but not in the case when structured with <task> .    for i in range(10): print(i)   We're still not really sure.  "
},
{
  "id": "exercise-198",
  "level": "2",
  "url": "coding-exercises.html#exercise-198",
  "type": "Checkpoint",
  "number": "5.3.3",
  "title": "An Exercise with a Static Program.",
  "body": "An Exercise with a Static Program  Similar to above, again, but we place the <program> element inside the <statement> , not after it as a peer. This signals that this is not a coding exercise and the program will render static, since it is explicitly labeled as not being interactive.   #include <stdio.h> int main(void)   We're not really sure. Still. "
},
{
  "id": "coding-exercise-python-unit-test",
  "level": "2",
  "url": "coding-exercises.html#coding-exercise-python-unit-test",
  "type": "Checkpoint",
  "number": "5.3.4",
  "title": "Coding Exercise, with Unit Tests.",
  "body": "Coding Exercise, with Unit Tests  Fix the following code so that it always correctly adds two numbers. [Ed. Unit test support is experimental.]   def add(a,b): return 4  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(add(2,2), 4, \"Adding two identical integers\") self.assertEqual(add(7,13), 20, \"Adding two different integers\") self.assertAlmostEqual(add(2.0,3.0), 5.0, 5, \"Adding two decimal numbers\") myTests().main()   We're not really sure. But it would begin as follows:   #include <stdio.h> int main(void)   "
},
{
  "id": "data-files",
  "level": "1",
  "url": "data-files.html",
  "type": "Section",
  "number": "5.4",
  "title": "Data Files",
  "body": " Data Files  In the following file of climate data, the first column is Year, second column is Global Average Temperature (Celcius), and the third column is Global Emmisions C02 (Giga-tons). [Normally you might place this inside a block with the <datafile> .]    1850 -0.37 2.24E-7 1860 -0.34 3.94E-7 1870 -0.28 6.6E-7 1880 -0.24 1.1 1890 -0.42 1.72 1900 -0.2 2.38 1910 -0.49 3.34 1920 -0.25 4.01 1930 -0.14 4.53 1940 0.01 5.5 1950 -0.17 6.63 1960 -0.05 10.5 1970 -0.03 16 1980 0.09 20.3 1990 0.3 22.6 2000 0.29 24.9 2010 0.56 32.7 2019 0.74 33.3    ccfile = open(\"ccdata1.txt\", \"r\") for aline in ccfile: values = aline.split() print('In', values[0], 'the average temp. was', values[1], '°C and CO2 emmisions were', values[2], 'gigatons.') ccfile.close()     Stack Overflow Developer Survey  [A data file can go lots of places. But to make it more prominent, and easy to cross-reference, it would be natural to put it into a <data> block.]  Now that you are experienced with working with files lets look at a bit of the data set. The survey had 98,855 respondents. We will work with a sample of 2000 of those responses for this lab. In addition we have narrowed down the questions from 129 to just 13. The columns we have included in this data set are:  Respondent  Country  JobSatisfaction  UndergradMajor  ConvertedSalary  Exercise  Gender  RaceEthnicity  EducationParents  HoursOutside  Age  LastNewJob  LanguageWorkedWith            import image img = image.Image(\"luther-bell.jpg\") print(img.getWidth()) print(img.getHeight()) p = img.getPixel(45, 55) print(p.getRed(), p.getGreen(), p.getBlue())    Golden Gate Bridge Image processing  This image has a Creative Commons license, but we've lost track of the exact terms.  [Now a data file and a program to process it, all bundled up inside a <computation> , since an <example> gets knowled and the ActiveCode does not fill.]      This program changes every pixel of the image.   import image img = image.Image(\"golden_gate.png\") win = image.ImageWin(img.getWidth(), img.getHeight()) img.draw(win) # img.setDelay(delay, number of pixels between delay) # setDelay(1, 400) will speed up a lot img.setDelay(1,15) for row in range(img.getHeight()): for col in range(img.getWidth()): p = img.getPixel(col, row) newred = p.red * 1.4 newgreen = p.green * .75 newblue = p.blue * 1.1 newpixel = image.Pixel(newred, newgreen, newblue) img.setPixel(col, row, newpixel) img.draw(win) win.exitonclick()    The examples above all use Python, which will run in your browser. Other languages will only run when a project is hosted on Runestone Academy servers. And in this case there is a small twist. You need to indicate which existing <datafile> your program needs, even if that seems obvious by reading the code. Use a datafile attribute on <program> that has a list of filenames. These are the filenames you set via the filename attribute of the <datafile> element, and are the names you use in your program's code. As before, no path information is neede, nor allowed.  [2023-02-21: testing for single files first, list of several not yet implemented.]  When the language attribute of a <program> is set to python3 that means in-browser Python is not good enough, and you want the greater power and flexibility of having your code run on a Runestone Academy server. So this is our first example of using the datafile attribute.  The data file is an abbreviated version of the example above, just to be different. And is not editable.   1900 -0.2 2.38 1910 -0.49 3.34 1920 -0.25 4.01 1930 -0.14 4.53 1940 0.01 5.5 1950 -0.17 6.63 1960 -0.05 10.5 1970 -0.03 16 1980 0.09 20.3 1990 0.3 22.6 2000 0.29 24.9 2010 0.56 32.7 2019 0.74 33.3   The program is identical to the above, but we specify python3 as the language, and use the smaller file. So this example is only active when this content is hosted on a Runestone Academy server.   ccfile = open(\"ccdata2.txt\", \"r\") for aline in ccfile: values = aline.split() print('In', values[0], 'the average temp. was', values[1], '°C and CO2 emmisions were', values[2], 'gigatons.') ccfile.close()   [2023-02-24 Testing Java with multiple data files]   Flowers  Two flower images as <datafile> for use in upcoming Java program.            import java.awt.*; import java.awt.font.*; import java.awt.geom.*; import java.awt.image.BufferedImage; import java.text.*; import java.util.*; import java.util.List; \/** * A class that represents a picture. This class inherits from * SimplePicture and allows the student to add functionality to * the Picture class. * * @author Barbara Ericson ericson@cc.gatech.edu *\/ public class Picture extends SimplePicture { \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ constructors \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ \/** * Constructor that takes no arguments *\/ public Picture () { \/* not needed but use it to show students the implicit call to super() * child constructors always call a parent constructor *\/ super(); } \/** * Constructor that takes a file name and creates the picture * @param fileName the name of the file to create the picture from *\/ public Picture(String fileName) { \/\/ let the parent class handle this fileName super(fileName); } \/** * Constructor that takes the height and width * @param height the height of the desired picture * @param width the width of the desired picture *\/ public Picture(int width, int height) { \/\/ let the parent class handle this width and height super(width,height); } \/** * Constructor that takes a picture and creates a * copy of that picture * @param copyPicture the picture to copy *\/ public Picture(Picture copyPicture) { \/\/ let the parent class do the copy super(copyPicture); } \/** * Constructor that takes a buffered image * @param image the buffered image to use *\/ public Picture(BufferedImage image) { super(image); } \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ methods \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ \/** * Method to return a string with information about this picture. * @return a string with information about the picture such as fileName, * height and width. *\/ public String toString() { String output = \"Picture, filename \" + getFileName() + \" height \" + getHeight() + \" width \" + getWidth(); return output; } \/** zeroBlue() method sets the blue values at all pixels to zero *\/ public void zeroBlue() { Pixel[][] pixels = this.getPixels2D(); for (Pixel[] rowArray : pixels) { for (Pixel p: rowArray) { p.setBlue(0); } } } \/* mirrorVertical() *\/ public void mirrorVertical() { Pixel[][] pixels = this.getPixels2D(); Pixel leftPixel = null; Pixel rightPixel = null; int width = pixels[0].length; for (int row = 0; row < pixels.length; row++) { for (int col = 0; col < width \/ 2; col++) { leftPixel = pixels[row][col]; rightPixel = pixels[row][width - 1 - col]; rightPixel.setColor(leftPixel.getColor()); } } } \/** copy from the passed fromPic to the * specified startRow and startCol in the * current picture * @param fromPic the picture to copy from * @param startRow the start row to copy to * @param startCol the start col to copy to *\/ public void copy(Picture fromPic, int startRow, int startCol) { Pixel fromPixel = null; Pixel toPixel = null; Pixel[][] toPixels = this.getPixels2D(); Pixel[][] fromPixels = fromPic.getPixels2D(); for (int fromRow = 0, toRow = startRow; fromRow < fromPixels.length && toRow < toPixels.length; fromRow++, toRow++) { for (int fromCol = 0, toCol = startCol; fromCol < fromPixels[0].length && toCol < toPixels[0].length; fromCol++, toCol++) { fromPixel = fromPixels[fromRow][fromCol]; toPixel = toPixels[toRow][toCol]; toPixel.setColor(fromPixel.getColor()); } } } public void createCollage() { \/\/ You can also try butterfly.jpg and snowflake.jpg Picture flower1 = new Picture(\"flower1.jpg\"); Picture flower2 = new Picture(\"flower2.jpg\"); this.copy(flower1,0,0); this.copy(flower2,100,0); this.copy(flower1,200,0); Picture flowerNoBlue = new Picture(flower2); flowerNoBlue.zeroBlue(); this.copy(flowerNoBlue,300,0); this.copy(flower1,400,0); this.copy(flower2,500,0); this.mirrorVertical(); this.show(); } \/* Main method for testing *\/ public static void main(String[] args) { Picture p = new Picture(500,500); p.createCollage(); } }     "
},
{
  "id": "data-1",
  "level": "2",
  "url": "data-files.html#data-1",
  "type": "Data",
  "number": "5.4.1",
  "title": "Stack Overflow Developer Survey.",
  "body": " Stack Overflow Developer Survey  [A data file can go lots of places. But to make it more prominent, and easy to cross-reference, it would be natural to put it into a <data> block.]  Now that you are experienced with working with files lets look at a bit of the data set. The survey had 98,855 respondents. We will work with a sample of 2000 of those responses for this lab. In addition we have narrowed down the questions from 129 to just 13. The columns we have included in this data set are:  Respondent  Country  JobSatisfaction  UndergradMajor  ConvertedSalary  Exercise  Gender  RaceEthnicity  EducationParents  HoursOutside  Age  LastNewJob  LanguageWorkedWith      "
},
{
  "id": "computation-1",
  "level": "2",
  "url": "data-files.html#computation-1",
  "type": "Computation",
  "number": "5.4.2",
  "title": "Golden Gate Bridge Image processing.",
  "body": " Golden Gate Bridge Image processing  This image has a Creative Commons license, but we've lost track of the exact terms.  [Now a data file and a program to process it, all bundled up inside a <computation> , since an <example> gets knowled and the ActiveCode does not fill.]      This program changes every pixel of the image.   import image img = image.Image(\"golden_gate.png\") win = image.ImageWin(img.getWidth(), img.getHeight()) img.draw(win) # img.setDelay(delay, number of pixels between delay) # setDelay(1, 400) will speed up a lot img.setDelay(1,15) for row in range(img.getHeight()): for col in range(img.getWidth()): p = img.getPixel(col, row) newred = p.red * 1.4 newgreen = p.green * .75 newblue = p.blue * 1.1 newpixel = image.Pixel(newred, newgreen, newblue) img.setPixel(col, row, newpixel) img.draw(win) win.exitonclick()   "
},
{
  "id": "data-2",
  "level": "2",
  "url": "data-files.html#data-2",
  "type": "Data",
  "number": "5.4.3",
  "title": "Flowers.",
  "body": " Flowers  Two flower images as <datafile> for use in upcoming Java program.         "
},
{
  "id": "videos-in-runestone",
  "level": "1",
  "url": "videos-in-runestone.html",
  "type": "Section",
  "number": "5.5",
  "title": "YouTube Videos",
  "body": " YouTube Videos  Runestone uses a YouTube API that broadcasts events when a reader interacts with a video. In this way, Runestone can record video-watching as an activity. As PreTeXt output we concede better behavior on small screens ( responsiveness ) to enable this feature in a Runestone version. A label attribute is necessary for persistence in the Runestone database. Various PreTeXt features, such as playlists, are not yet supported make a request.   A List Variable Video   The margins here are asymmetric just as a test. And this text is here to see where the video ends.  "
},
{
  "id": "rune-nested-divisions",
  "level": "1",
  "url": "rune-nested-divisions.html",
  "type": "Section",
  "number": "5.6",
  "title": "Deeper",
  "body": " Deeper   This is a stub of a <section> , but it contains two <subsection> which each contain a PROJECT-LIKE item that includes a <program> element, and thus is a coding exercise. This tests migration to the Runestone assignment area, though Runestone only has divisions two-deep ( chapter and subchapter , so both will show up associated with the same <section> this one.  The first is a start of a C program, so will only be interactive on a Runestone server. The second is a Python program, so will be interactive in all HTML outputs.    Subsection One  An <activity> next. This one has a <program> so will be made interactive whenever possible.   Activity in a Subsection   We would suggest you do something here.    #include <stdio.h> int main(void)    Nothing suggests this next <project> is interactive.   Project in a Subsection   You would work this project on paper, most likely. It is never interactive since there is no indication of a desire for that, even if hosted on a capable platform.  A little bit of markup, to test a bug: . (The bug was only apparent under a deprecated method for specify a question to be an interactive short-answer question on Runestone Academy.)      Subsection Two  An <exploration> next.   Exploration in a Subsection   We would suggest now that you explore something here. In this case we simply provide a CodeLens, which would be graded as an interaction .    for i in range(10): print(i)    The next simple <exercise> will be a short answer question on a capable interactive platform since we have included a <response> element.  Inline Exercise in a Subsection  I am an interactive short answer question, but only on a capable platform.    "
},
{
  "id": "activity-in-subsection",
  "level": "2",
  "url": "rune-nested-divisions.html#activity-in-subsection",
  "type": "Activity",
  "number": "5.6.1",
  "title": "Activity in a Subsection.",
  "body": " Activity in a Subsection   We would suggest you do something here.    #include <stdio.h> int main(void)   "
},
{
  "id": "project-1",
  "level": "2",
  "url": "rune-nested-divisions.html#project-1",
  "type": "Project",
  "number": "5.6.2",
  "title": "Project in a Subsection.",
  "body": " Project in a Subsection   You would work this project on paper, most likely. It is never interactive since there is no indication of a desire for that, even if hosted on a capable platform.  A little bit of markup, to test a bug: . (The bug was only apparent under a deprecated method for specify a question to be an interactive short-answer question on Runestone Academy.)   "
},
{
  "id": "exploration-with-always-static-program",
  "level": "2",
  "url": "rune-nested-divisions.html#exploration-with-always-static-program",
  "type": "Exploration",
  "number": "5.6.3",
  "title": "Exploration in a Subsection.",
  "body": " Exploration in a Subsection   We would suggest now that you explore something here. In this case we simply provide a CodeLens, which would be graded as an interaction .    for i in range(10): print(i)   "
},
{
  "id": "exercise-200",
  "level": "2",
  "url": "rune-nested-divisions.html#exercise-200",
  "type": "Checkpoint",
  "number": "5.6.1",
  "title": "Inline Exercise in a Subsection.",
  "body": "Inline Exercise in a Subsection  I am an interactive short answer question, but only on a capable platform.  "
},
{
  "id": "true-false-exercises",
  "level": "1",
  "url": "true-false-exercises.html",
  "type": "Exercises",
  "number": "5.7",
  "title": "True\/False Exercises",
  "body": " True\/False Exercises  True\/False vector space  Every vector space has finite dimension.   The vector space of all polynomials with finite degree has a basis, , which is infinte.   , the vector space of polynomials with degree at most , has dimension by . [Cross-reference is just a demo, content is not relevant.] What happens if we relax the defintion and remove the parameter ?   "
},
{
  "id": "vector-space-dimension",
  "level": "2",
  "url": "true-false-exercises.html#vector-space-dimension",
  "type": "Exercise",
  "number": "5.7.1",
  "title": "True\/False.",
  "body": "True\/False vector space  Every vector space has finite dimension.   The vector space of all polynomials with finite degree has a basis, , which is infinte.   , the vector space of polynomials with degree at most , has dimension by . [Cross-reference is just a demo, content is not relevant.] What happens if we relax the defintion and remove the parameter ?  "
},
{
  "id": "multiple-choice-exercises",
  "level": "1",
  "url": "multiple-choice-exercises.html",
  "type": "Exercises",
  "number": "5.8",
  "title": "Multiple Choice Exercises",
  "body": " Multiple Choice Exercises  Multiple-Choice, Not Randomized, One Answer stop signs  What color is a stop sign?     Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?   Maybe go out for a drive?   Multiple-Choice, Not Randomized, Multiple Answers stop signs  Which colors might be found in a rainbow? (Note that the radio buttons now allow multiple buttons to be selected.)     Red    Red is a definitely one of the colors.      Yellow    Yes, yellow is correct.      Black    Remember the acronym ROY G BIV . B stands for blue.      Green    Yes, green is one of the colors.     Do you know the acronym ROY G BIV for the colors of a rainbow, and their order?   Multiple-Choice, Randomized, One Answer stop signs  What color is a stop sign? [Static versions retain the order as authored.]     Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?   Maybe go out for a drive?   Multiple-Choice, Randomized, Multiple Answers stop signs  Which colors might be found in a rainbow? (Note that the radio buttons now allow multiple buttons to be selected.) [Static versions retain the order as authored.]     Red    Red is a definitely one of the colors.      Yellow    Yes, yellow is correct.      Black    Remember the acronym ROY G BIV . B stands for blue.      Green    Yes, green is one of the colors.     Do you know the acronym ROY G BIV for the colors of a rainbow, and their order?   Mathematical Multiple-Choice, Not Randomized, Multiple Answers stop signs  Which of the following is an antiderivative of ?        Remember that when we write on an antiderivative that this is the way we communicate that there are many possible derivatives, but they all differ by a constant .         The derivative given in the statement of the problem looks exactly like an application of the chain rule to .         Take a derivative on to see that this answer is correct. Extra credit: does this answer differ by a constant when subtracted from either of the other two correct answers?         The antiderivative of a product is not the product of the antiderivatives. Use the product rule to take a derivative and see that this answer is not correct.     You can take a derivative on any one of the choices to see if it is correct or not, rather than using techniques of integration to find a single correct answer.   "
},
{
  "id": "multiple-choice-not-randomized",
  "level": "2",
  "url": "multiple-choice-exercises.html#multiple-choice-not-randomized",
  "type": "Exercise",
  "number": "5.8.1",
  "title": "Multiple-Choice, Not Randomized, One Answer.",
  "body": "Multiple-Choice, Not Randomized, One Answer stop signs  What color is a stop sign?     Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?   Maybe go out for a drive?  "
},
{
  "id": "multiple-choice-multiple-answers",
  "level": "2",
  "url": "multiple-choice-exercises.html#multiple-choice-multiple-answers",
  "type": "Exercise",
  "number": "5.8.2",
  "title": "Multiple-Choice, Not Randomized, Multiple Answers.",
  "body": "Multiple-Choice, Not Randomized, Multiple Answers stop signs  Which colors might be found in a rainbow? (Note that the radio buttons now allow multiple buttons to be selected.)     Red    Red is a definitely one of the colors.      Yellow    Yes, yellow is correct.      Black    Remember the acronym ROY G BIV . B stands for blue.      Green    Yes, green is one of the colors.     Do you know the acronym ROY G BIV for the colors of a rainbow, and their order?  "
},
{
  "id": "multiple-choice-randomized",
  "level": "2",
  "url": "multiple-choice-exercises.html#multiple-choice-randomized",
  "type": "Exercise",
  "number": "5.8.3",
  "title": "Multiple-Choice, Randomized, One Answer.",
  "body": "Multiple-Choice, Randomized, One Answer stop signs  What color is a stop sign? [Static versions retain the order as authored.]     Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?   Maybe go out for a drive?  "
},
{
  "id": "multiple-choice-randomized-multiple-answers",
  "level": "2",
  "url": "multiple-choice-exercises.html#multiple-choice-randomized-multiple-answers",
  "type": "Exercise",
  "number": "5.8.4",
  "title": "Multiple-Choice, Randomized, Multiple Answers.",
  "body": "Multiple-Choice, Randomized, Multiple Answers stop signs  Which colors might be found in a rainbow? (Note that the radio buttons now allow multiple buttons to be selected.) [Static versions retain the order as authored.]     Red    Red is a definitely one of the colors.      Yellow    Yes, yellow is correct.      Black    Remember the acronym ROY G BIV . B stands for blue.      Green    Yes, green is one of the colors.     Do you know the acronym ROY G BIV for the colors of a rainbow, and their order?  "
},
{
  "id": "mathematical-multiple-choice-multiple-answers",
  "level": "2",
  "url": "multiple-choice-exercises.html#mathematical-multiple-choice-multiple-answers",
  "type": "Exercise",
  "number": "5.8.5",
  "title": "Mathematical Multiple-Choice, Not Randomized, Multiple Answers.",
  "body": "Mathematical Multiple-Choice, Not Randomized, Multiple Answers stop signs  Which of the following is an antiderivative of ?        Remember that when we write on an antiderivative that this is the way we communicate that there are many possible derivatives, but they all differ by a constant .         The derivative given in the statement of the problem looks exactly like an application of the chain rule to .         Take a derivative on to see that this answer is correct. Extra credit: does this answer differ by a constant when subtracted from either of the other two correct answers?         The antiderivative of a product is not the product of the antiderivatives. Use the product rule to take a derivative and see that this answer is not correct.     You can take a derivative on any one of the choices to see if it is correct or not, rather than using techniques of integration to find a single correct answer.  "
},
{
  "id": "parsons-exercises",
  "level": "1",
  "url": "parsons-exercises.html",
  "type": "Exercises",
  "number": "5.9",
  "title": "Parsons Exercises",
  "body": " Parsons Exercises  Parsons Problem, Mathematical Proof even numbers  Create a proof of the theorem: If is an even number, then .    Suppose is even.    Then is a prime number.  Then there exists an so that .  Then there exists an so that .    Click the heels of your ruby slippers together three times.    So .  This is a superfluous second paragraph in this block.    Thus .    And a little bit of irrelevant multi-line math .   Dorothy will not be much help with this proof.  Parsons Problem, Programming prime numbers Sieve of Eratosthenes  The Sieve of Eratosthenes computes prime numbers by starting with a finite list of the integers bigger than 1. The first member of the list is a prime and is saved\/recorded. Then all multiples of that prime (which not a prime, excepting the prime itself!) are removed from the list. Now the first number remaining in the list is the next prime number. And the process repeats.  The code blocks below can be rearranged to form one of the many possible programs to implement this algorithm to compute a list of all the primes less than . [Ed. this version of this problem requires the reader to provide the necessary indentation.]  This reprises .    n = 250     primes = []  candidates = list(range(2,n))    candidates = []  primes = list(range(2,n))     primes = candidates + [p]    while candidates:    p = candidates[0]  primes.append(p)    for nonprime in range(p, n, p):    if nonprime in candidates:  candidates.remove(nonprime)    print(primes)    Parsons Problem, Programming prime numbers Sieve of Eratosthenes  The Sieve of Eratosthenes computes prime numbers by starting with a finite list of the integers bigger than 1. The first member of the list is a prime and is saved\/recorded. Then all multiples of that prime (which not a prime, excepting the prime itself!) are removed from the list. Now the first number remaining in the list is the next prime number. And the process repeats.  The code blocks below can be rearranged to form one of the many possible programs to implement this algorithm to compute a list of all the primes less than . [Ed. this version of this problem does not require the reader to provide the necessary indentation, which is the default.]  This reprises .    n = 250     primes = []  candidates = list(range(2,n))    candidates = []  primes = list(range(2,n))     primes = candidates + [p]    while candidates:    p = candidates[0]  primes.append(p)    for nonprime in range(p, n, p):    if nonprime in candidates:  candidates.remove(nonprime)    print(primes)    Parsons Problem, Mathematical Proof, Numbered Blocks even numbers  Create a proof of the theorem: If is an even number, then . [Ed. This version has numbered blocks, online they are on the right end of the block.]    Suppose is even.    Then is a prime number.  Then there exists an so that .  Then there exists an so that .    Click the heels of your ruby slippers together three times.    So .  This is a superfluous second paragraph in this block.    Thus .   Dorothy will not be much help with this proof.  Parsons Problem, Programming prime numbers Sieve of Eratosthenes  The Sieve of Eratosthenes computes prime numbers by starting with a finite list of the integers bigger than 1. The first member of the list is a prime and is saved\/recorded. Then all multiples of that prime (which not a prime, excepting the prime itself!) are removed from the list. Now the first number remaining in the list is the next prime number. And the process repeats.  The code blocks below can be rearranged to form one of the many possible programs to implement this algorithm to compute a list of all the primes less than . [Ed. This version has numbered blocks, online they are on the left end of the block.]  This reprises .    n = 250     primes = []  candidates = list(range(2,n))    candidates = []  primes = list(range(2,n))     primes = candidates + [p]    while candidates:    p = candidates[0]  primes.append(p)    for nonprime in range(p, n, p):    if nonprime in candidates:  candidates.remove(nonprime)    print(primes)    "
},
{
  "id": "number-theory-proof",
  "level": "2",
  "url": "parsons-exercises.html#number-theory-proof",
  "type": "Exercise",
  "number": "5.9.1",
  "title": "Parsons Problem, Mathematical Proof.",
  "body": "Parsons Problem, Mathematical Proof even numbers  Create a proof of the theorem: If is an even number, then .    Suppose is even.    Then is a prime number.  Then there exists an so that .  Then there exists an so that .    Click the heels of your ruby slippers together three times.    So .  This is a superfluous second paragraph in this block.    Thus .    And a little bit of irrelevant multi-line math .   Dorothy will not be much help with this proof. "
},
{
  "id": "prime-number-program-indent-yes",
  "level": "2",
  "url": "parsons-exercises.html#prime-number-program-indent-yes",
  "type": "Exercise",
  "number": "5.9.2",
  "title": "Parsons Problem, Programming.",
  "body": "Parsons Problem, Programming prime numbers Sieve of Eratosthenes  The Sieve of Eratosthenes computes prime numbers by starting with a finite list of the integers bigger than 1. The first member of the list is a prime and is saved\/recorded. Then all multiples of that prime (which not a prime, excepting the prime itself!) are removed from the list. Now the first number remaining in the list is the next prime number. And the process repeats.  The code blocks below can be rearranged to form one of the many possible programs to implement this algorithm to compute a list of all the primes less than . [Ed. this version of this problem requires the reader to provide the necessary indentation.]  This reprises .    n = 250     primes = []  candidates = list(range(2,n))    candidates = []  primes = list(range(2,n))     primes = candidates + [p]    while candidates:    p = candidates[0]  primes.append(p)    for nonprime in range(p, n, p):    if nonprime in candidates:  candidates.remove(nonprime)    print(primes)   "
},
{
  "id": "prime-number-program-indent-no",
  "level": "2",
  "url": "parsons-exercises.html#prime-number-program-indent-no",
  "type": "Exercise",
  "number": "5.9.3",
  "title": "Parsons Problem, Programming.",
  "body": "Parsons Problem, Programming prime numbers Sieve of Eratosthenes  The Sieve of Eratosthenes computes prime numbers by starting with a finite list of the integers bigger than 1. The first member of the list is a prime and is saved\/recorded. Then all multiples of that prime (which not a prime, excepting the prime itself!) are removed from the list. Now the first number remaining in the list is the next prime number. And the process repeats.  The code blocks below can be rearranged to form one of the many possible programs to implement this algorithm to compute a list of all the primes less than . [Ed. this version of this problem does not require the reader to provide the necessary indentation, which is the default.]  This reprises .    n = 250     primes = []  candidates = list(range(2,n))    candidates = []  primes = list(range(2,n))     primes = candidates + [p]    while candidates:    p = candidates[0]  primes.append(p)    for nonprime in range(p, n, p):    if nonprime in candidates:  candidates.remove(nonprime)    print(primes)   "
},
{
  "id": "number-theory-proof-numbered-left",
  "level": "2",
  "url": "parsons-exercises.html#number-theory-proof-numbered-left",
  "type": "Exercise",
  "number": "5.9.4",
  "title": "Parsons Problem, Mathematical Proof, Numbered Blocks.",
  "body": "Parsons Problem, Mathematical Proof, Numbered Blocks even numbers  Create a proof of the theorem: If is an even number, then . [Ed. This version has numbered blocks, online they are on the right end of the block.]    Suppose is even.    Then is a prime number.  Then there exists an so that .  Then there exists an so that .    Click the heels of your ruby slippers together three times.    So .  This is a superfluous second paragraph in this block.    Thus .   Dorothy will not be much help with this proof. "
},
{
  "id": "prime-number-program-numbered-right",
  "level": "2",
  "url": "parsons-exercises.html#prime-number-program-numbered-right",
  "type": "Exercise",
  "number": "5.9.5",
  "title": "Parsons Problem, Programming.",
  "body": "Parsons Problem, Programming prime numbers Sieve of Eratosthenes  The Sieve of Eratosthenes computes prime numbers by starting with a finite list of the integers bigger than 1. The first member of the list is a prime and is saved\/recorded. Then all multiples of that prime (which not a prime, excepting the prime itself!) are removed from the list. Now the first number remaining in the list is the next prime number. And the process repeats.  The code blocks below can be rearranged to form one of the many possible programs to implement this algorithm to compute a list of all the primes less than . [Ed. This version has numbered blocks, online they are on the left end of the block.]  This reprises .    n = 250     primes = []  candidates = list(range(2,n))    candidates = []  primes = list(range(2,n))     primes = candidates + [p]    while candidates:    p = candidates[0]  primes.append(p)    for nonprime in range(p, n, p):    if nonprime in candidates:  candidates.remove(nonprime)    print(primes)   "
},
{
  "id": "horizontal-parsons-exercises",
  "level": "1",
  "url": "horizontal-parsons-exercises.html",
  "type": "Exercises",
  "number": "5.10",
  "title": "Horizontal Parsons Exercises",
  "body": " Horizontal Parsons Exercises  Parsons Problem, SQL statement  Form the SQL statement by rearranging the four blocks.    SELECT  *  FROM  test   Parsons Problem, SQL statement, no randomization  Form the SQL statement by rearranging the four blocks. This version of this problem will always present the blocks in the same fixed order (but incorrect, hopefully!), as prescribed by the author in the source.   SELECT  *  FROM  test   Parsons Problem, SQL statement, automatic feedback  Form the SQL statement by rearranging the four blocks.   SELECT  *  FROM  test  assert 1,1 == world assert 0,1 == hello assert 2,1 == 42  Parsons Problem, Natural Language  Form the sentence often used to show font samples. You can reuse blocks as needed.    quick  brown  fox  jumped  over  the  lazy  dog   Parsons Problem, Natural Language, with Distractors  Form the sentence often used to show font samples. Again, but now with distractors.    quick  brown  fox  jumped  foo  over  the  lazy  bar  dog   Parsons Problem, SQL statement, reusable  Form the SQL statement by rearranging the four blocks. Same problem as above, but we allow blocks to be reused (even though the solution does not require that).   SELECT  *  FROM  test   "
},
{
  "id": "horizontal-parson-sql-statement-simple",
  "level": "2",
  "url": "horizontal-parsons-exercises.html#horizontal-parson-sql-statement-simple",
  "type": "Exercise",
  "number": "5.10.1",
  "title": "Parsons Problem, SQL statement.",
  "body": "Parsons Problem, SQL statement  Form the SQL statement by rearranging the four blocks.    SELECT  *  FROM  test  "
},
{
  "id": "horizontal-parson-sql-statement-no-randomize",
  "level": "2",
  "url": "horizontal-parsons-exercises.html#horizontal-parson-sql-statement-no-randomize",
  "type": "Exercise",
  "number": "5.10.2",
  "title": "Parsons Problem, SQL statement, no randomization.",
  "body": "Parsons Problem, SQL statement, no randomization  Form the SQL statement by rearranging the four blocks. This version of this problem will always present the blocks in the same fixed order (but incorrect, hopefully!), as prescribed by the author in the source.   SELECT  *  FROM  test  "
},
{
  "id": "horizontal-parson-sql-statement-with-db",
  "level": "2",
  "url": "horizontal-parsons-exercises.html#horizontal-parson-sql-statement-with-db",
  "type": "Exercise",
  "number": "5.10.3",
  "title": "Parsons Problem, SQL statement, automatic feedback.",
  "body": "Parsons Problem, SQL statement, automatic feedback  Form the SQL statement by rearranging the four blocks.   SELECT  *  FROM  test  assert 1,1 == world assert 0,1 == hello assert 2,1 == 42 "
},
{
  "id": "horizontal-parson-natural",
  "level": "2",
  "url": "horizontal-parsons-exercises.html#horizontal-parson-natural",
  "type": "Exercise",
  "number": "5.10.4",
  "title": "Parsons Problem, Natural Language.",
  "body": "Parsons Problem, Natural Language  Form the sentence often used to show font samples. You can reuse blocks as needed.    quick  brown  fox  jumped  over  the  lazy  dog  "
},
{
  "id": "horizontal-parson-natural-distractor",
  "level": "2",
  "url": "horizontal-parsons-exercises.html#horizontal-parson-natural-distractor",
  "type": "Exercise",
  "number": "5.10.5",
  "title": "Parsons Problem, Natural Language, with Distractors.",
  "body": "Parsons Problem, Natural Language, with Distractors  Form the sentence often used to show font samples. Again, but now with distractors.    quick  brown  fox  jumped  foo  over  the  lazy  bar  dog  "
},
{
  "id": "horizontal-parson-sql-statement-reusable",
  "level": "2",
  "url": "horizontal-parsons-exercises.html#horizontal-parson-sql-statement-reusable",
  "type": "Exercise",
  "number": "5.10.6",
  "title": "Parsons Problem, SQL statement, reusable.",
  "body": "Parsons Problem, SQL statement, reusable  Form the SQL statement by rearranging the four blocks. Same problem as above, but we allow blocks to be reused (even though the solution does not require that).   SELECT  *  FROM  test  "
},
{
  "id": "matching-exercises",
  "level": "1",
  "url": "matching-exercises.html",
  "type": "Exercises",
  "number": "5.11",
  "title": "Matching Exercises",
  "body": " Matching Exercises   Matching Problem, Dates matching US dates  Match each event in United States history with the year it happened.   Review Encyclopedia Brittania, 25 Decade-Defining Events in U.S. History url.    Monroe Doctrine  1823    Haymarket Riot  1886    Louisiana Purchase  1803    Battle of Gettysburg  1863    Matching Problem, Derivatives matching derivatives  Match each function with its derivative.   Did you compute the derivative of each function in the premises (left column)?                Matching Problem, Linear Algebra matching bases and subspaces  Match each subspace with a basis for that subspace. (You may assume that each set is really a basis for at least one of the subspaces.)   Each putative basis is a subset of exactly one of the three subspaces. So for each subspace, two of the three sets can be ruled out by simply testing that the vectors of the basis are members of the subspace, via the membership criteria.                For openers, a basis for a subspace must be a subset of the subspace.   "
},
{
  "id": "matching-dates",
  "level": "2",
  "url": "matching-exercises.html#matching-dates",
  "type": "Exercise",
  "number": "5.11.1",
  "title": "Matching Problem, Dates.",
  "body": "Matching Problem, Dates matching US dates  Match each event in United States history with the year it happened.   Review Encyclopedia Brittania, 25 Decade-Defining Events in U.S. History url.    Monroe Doctrine  1823    Haymarket Riot  1886    Louisiana Purchase  1803    Battle of Gettysburg  1863   "
},
{
  "id": "matching-derivatives",
  "level": "2",
  "url": "matching-exercises.html#matching-derivatives",
  "type": "Exercise",
  "number": "5.11.2",
  "title": "Matching Problem, Derivatives.",
  "body": "Matching Problem, Derivatives matching derivatives  Match each function with its derivative.   Did you compute the derivative of each function in the premises (left column)?               "
},
{
  "id": "matching-bases",
  "level": "2",
  "url": "matching-exercises.html#matching-bases",
  "type": "Exercise",
  "number": "5.11.3",
  "title": "Matching Problem, Linear Algebra.",
  "body": "Matching Problem, Linear Algebra matching bases and subspaces  Match each subspace with a basis for that subspace. (You may assume that each set is really a basis for at least one of the subspaces.)   Each putative basis is a subset of exactly one of the three subspaces. So for each subspace, two of the three sets can be ruled out by simply testing that the vectors of the basis are members of the subspace, via the membership criteria.                For openers, a basis for a subspace must be a subset of the subspace.  "
},
{
  "id": "clickable-area-exercises",
  "level": "1",
  "url": "clickable-area-exercises.html",
  "type": "Exercises",
  "number": "5.12",
  "title": "Clickable Area Exercises",
  "body": " Clickable Area Exercises  Clickable Areas, Regular Text  Identify (by clicking, or by circling) all of the nouns in this quotation by Eleanor Roosevelt.   The future belongs to those who believe in the beauty of their  dreams .   The incorrect words are pronouns.   Clickable Areas, Code  Identify (by clicking, or by circling) all of the assignment statements in this Python function.   def main():   x = 4  for i in range(5):   y = i   if y > 2:  print(y)   Remember, the operator = is used for assignment.   Clickable Areas, Text in a Table  A two-dimensional array was created in Python with the list comprehension:  [[0 for x in range(3)] for y in range(2)]  Then the values were (mostly) changed from zeros and the final array is shown below.  Identify (by clicking, or by circling) all of the boolean values in the array.      42  True  'towel'    'true'  0  False    This second table has no <area> , in order to test CSS for tables.    42  True  'towel'    'true'  0  False     Python boolean variables are True and False . A value in quotation marks is a string, not a boolean.   Python boolean variables begin with capital latters.   "
},
{
  "id": "clickable-text",
  "level": "2",
  "url": "clickable-area-exercises.html#clickable-text",
  "type": "Exercise",
  "number": "5.12.1",
  "title": "Clickable Areas, “Regular” Text.",
  "body": "Clickable Areas, Regular Text  Identify (by clicking, or by circling) all of the nouns in this quotation by Eleanor Roosevelt.   The future belongs to those who believe in the beauty of their  dreams .   The incorrect words are pronouns.  "
},
{
  "id": "clickable-code",
  "level": "2",
  "url": "clickable-area-exercises.html#clickable-code",
  "type": "Exercise",
  "number": "5.12.2",
  "title": "Clickable Areas, Code.",
  "body": "Clickable Areas, Code  Identify (by clicking, or by circling) all of the assignment statements in this Python function.   def main():   x = 4  for i in range(5):   y = i   if y > 2:  print(y)   Remember, the operator = is used for assignment.  "
},
{
  "id": "clickable-table",
  "level": "2",
  "url": "clickable-area-exercises.html#clickable-table",
  "type": "Exercise",
  "number": "5.12.3",
  "title": "Clickable Areas, Text in a Table.",
  "body": "Clickable Areas, Text in a Table  A two-dimensional array was created in Python with the list comprehension:  [[0 for x in range(3)] for y in range(2)]  Then the values were (mostly) changed from zeros and the final array is shown below.  Identify (by clicking, or by circling) all of the boolean values in the array.      42  True  'towel'    'true'  0  False    This second table has no <area> , in order to test CSS for tables.    42  True  'towel'    'true'  0  False     Python boolean variables are True and False . A value in quotation marks is a string, not a boolean.   Python boolean variables begin with capital latters.  "
},
{
  "id": "short-answer-exercises",
  "level": "1",
  "url": "short-answer-exercises.html",
  "type": "Exercises",
  "number": "5.13",
  "title": "Short Answer Exercises",
  "body": " Short Answer Exercises  Short Answer  This sample book is configured to make some simple questions interactive on a capable platform, by adding a <response> element as a signal.   "
},
{
  "id": "short-answer-question",
  "level": "2",
  "url": "short-answer-exercises.html#short-answer-question",
  "type": "Exercise",
  "number": "5.13.1",
  "title": "Short Answer.",
  "body": "Short Answer  This sample book is configured to make some simple questions interactive on a capable platform, by adding a <response> element as a signal.  "
},
{
  "id": "fill-in--exercises",
  "level": "1",
  "url": "fill-in--exercises.html",
  "type": "Exercises",
  "number": "5.14",
  "title": "Fill-In Exercises",
  "body": " Fill-In Exercises  Fill-In, Integer Answer  The game of bowling uses pins that you try to knock down. (This answer blank has been set to be very wide.)      Arranged in a triangle, there are pins, a so-called triangular number.      Close ! You may have used hexadecimal notation, when you did not really mean to.      Incorrect.      Fill-In, String and Number Answers  Complete the following line of a Python program so that it will declare an integer variable age with an initial value of 5 . (These two answer blanks have been set to be very short.)   age =  ;      A variable of type int is appropriate for whole number ages.      Remember that Java uses just the first three letters of the word integer to define an integral type.        An integer variable may be initialized to a value.      Use 5 as the initial value of the variable.      Fill-In, Case-Insensitive Answer  The word is the opposite of yes . (Try a mixture of upper and lower-case letters.)      The correct answers are no, No, nO, and NO.    Incorrect.     Fill-In, Decimal Answer  The decimal number is an approximation of to within three significant figures. ( Wikipedia ).       Any value in the interval is correct.      Incorrect. Did you provide three significant figures ?      "
},
{
  "id": "fillin-integer",
  "level": "2",
  "url": "fill-in--exercises.html#fillin-integer",
  "type": "Exercise",
  "number": "5.14.1",
  "title": "Fill-In, Integer Answer.",
  "body": "Fill-In, Integer Answer  The game of bowling uses pins that you try to knock down. (This answer blank has been set to be very wide.)      Arranged in a triangle, there are pins, a so-called triangular number.      Close ! You may have used hexadecimal notation, when you did not really mean to.      Incorrect.     "
},
{
  "id": "fillin-string-integer",
  "level": "2",
  "url": "fill-in--exercises.html#fillin-string-integer",
  "type": "Exercise",
  "number": "5.14.2",
  "title": "Fill-In, String and Number Answers.",
  "body": "Fill-In, String and Number Answers  Complete the following line of a Python program so that it will declare an integer variable age with an initial value of 5 . (These two answer blanks have been set to be very short.)   age =  ;      A variable of type int is appropriate for whole number ages.      Remember that Java uses just the first three letters of the word integer to define an integral type.        An integer variable may be initialized to a value.      Use 5 as the initial value of the variable.     "
},
{
  "id": "fillin-case-insensitive",
  "level": "2",
  "url": "fill-in--exercises.html#fillin-case-insensitive",
  "type": "Exercise",
  "number": "5.14.3",
  "title": "Fill-In, Case-Insensitive Answer.",
  "body": "Fill-In, Case-Insensitive Answer  The word is the opposite of yes . (Try a mixture of upper and lower-case letters.)      The correct answers are no, No, nO, and NO.    Incorrect.    "
},
{
  "id": "fillin-decimal",
  "level": "2",
  "url": "fill-in--exercises.html#fillin-decimal",
  "type": "Exercise",
  "number": "5.14.4",
  "title": "Fill-In, Decimal Answer.",
  "body": "Fill-In, Decimal Answer  The decimal number is an approximation of to within three significant figures. ( Wikipedia ).       Any value in the interval is correct.      Incorrect. Did you provide three significant figures ?     "
},
{
  "id": "exercises-timed",
  "level": "1",
  "url": "exercises-timed.html",
  "type": "Section",
  "number": "5.15",
  "title": "Exercises that are Timed",
  "body": " Exercises that are Timed  This is a section that merely explains and holds an <exercises> division, which will be at the level of a <subsection> . There is a time-limit attribute on <exercises> , set to the value 10 , which implies (a) the collection of (two) exercises is a timed exam when hosted on Runestone, and (b) a student will have 10 minutes to complete the collection.  Showing results, showing feedback, displaying a timer, and allowing pausing are all enabled by default. To disable any of these features, set the corresponding attributes on the <exercises> division, results , feedback , timer , pause , to the value no . As a test, we have turned off pausing. Don't panic!  Of course, if you are not viewing this while online and hosted on a Runestone server, then these exercises will not look any different than in other places.  (Since this is an unstructured division, the number of the <exercises> is not displayed when born. It does have a number, which is the same as the enclosing <section> . To wit: versus .)   Timed Exercises   You have 10 minutes to do these exercises when hosted online on a Runestone server.   True\/False vector space  Every vector space has finite dimension.   The vector space of all polynomials with finite degree has a basis, , which is infinte.   , the vector space of polynomials with degree at most , has dimension by . [Cross-reference is just a demo, content is not relevant.] What happens if we relax the defintion and remove the parameter ?   Multiple-Choice, Not Randomized, One Answer stop signs  What color is a stop sign?     Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?   Maybe go out for a drive?    "
},
{
  "id": "vector-space-dimension-timed",
  "level": "2",
  "url": "exercises-timed.html#vector-space-dimension-timed",
  "type": "Exercise",
  "number": "5.15.1",
  "title": "True\/False.",
  "body": "True\/False vector space  Every vector space has finite dimension.   The vector space of all polynomials with finite degree has a basis, , which is infinte.   , the vector space of polynomials with degree at most , has dimension by . [Cross-reference is just a demo, content is not relevant.] What happens if we relax the defintion and remove the parameter ?  "
},
{
  "id": "multiple-choice-not-randomized-timed",
  "level": "2",
  "url": "exercises-timed.html#multiple-choice-not-randomized-timed",
  "type": "Exercise",
  "number": "5.15.2",
  "title": "Multiple-Choice, Not Randomized, One Answer.",
  "body": "Multiple-Choice, Not Randomized, One Answer stop signs  What color is a stop sign?     Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?   Maybe go out for a drive?  "
},
{
  "id": "interactive-projects",
  "level": "1",
  "url": "interactive-projects.html",
  "type": "Section",
  "number": "5.16",
  "title": "Projects and Friends",
  "body": " Projects and Friends  PROJECT-LIKE refers to the elements\/blocks <project> , <activity> , <activity> , and <exploration> . They are very similar to <exercise> , and here we stress that they can be interactive in all the same ways an <exercise> can. Key differences are that they are blocks, and so are peers of other blocks like paragraphs and examples, and are children of divisions. By default they have their own numbering scheme, though we expect this to convert to an elective behavior.  Both <exercise> and PROJECT-LIKE can be structured with <task> . It would be natural to have a <project> with multiple <task> , each a possibly different interactive problem type. We expect that to be possible soon. For now, <exercise> and <project> (and friends) need to be structured with a <statement> (and their associated signal) in order to be interactive.   Multiple-Choice, Not Randomized, Multiple Answers  stop signs   Which colors might be found in a rainbow? (Note that the radio buttons now allow multiple buttons to be selected.)      Red    Red is a definitely one of the colors.      Yellow    Yes, yellow is correct.      Black    Remember the acronym ROY G BIV . B stands for blue.      Green    Yes, green is one of the colors.      Do you know the acronym ROY G BIV for the colors of a rainbow, and their order?    Now an <exercise> with two <task> . Since the latter is a short-answer question, it will only be interactive on a capable platform.  True\/False and Explain  Structured with task, we can have an introduction, but this does not migrate with the interactive portions.  True\/False vector space  Every vector space has finite dimension.   The vector space of all polynomials with finite degree has a basis, , which is infinte.   , the vector space of polynomials with degree at most , has dimension by . [Cross-reference is just a demo, content is not relevant.] What happens if we relax the defintion and remove the parameter ?   Explain your reasoning in the previous question.   Now an <exploration> nested two-deep with the same two questions , two times each, just for testing purposes.   Exploring Two-Deep  First Iterations of Each Multiple-Choice, Not Randomized, One Answer (First Copy) stop signs  What color is a stop sign?     Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?   Maybe go out for a drive?  Python ActiveCode (First Copy)  Run the following program and observe the information provided at each step.   for i in range(10): print(i)  We're still not really sure.  Second Iterations of Each Multiple-Choice, Not Randomized, One Answer (Second Copy) stop signs  What color is a stop sign?  We include a spurious Python <program> element in the <statement> which should never convert this from a multiple-choice question into a programming exercise (on any host), but should still get syntax highlighting as part of rendering the exercise.   sum = 0 sum += 6 for i in range(sum): print(\"Hello, World!\")      Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?   Maybe go out for a drive?  Python ActiveCode (Second Copy)  Run the following program and observe the information provided at each step.   for i in range(10): print(i)  We're still not really sure.   "
},
{
  "id": "activity-multiple-choice-multiple-answers",
  "level": "2",
  "url": "interactive-projects.html#activity-multiple-choice-multiple-answers",
  "type": "Activity",
  "number": "5.16.1",
  "title": "Multiple-Choice, Not Randomized, Multiple Answers.",
  "body": " Multiple-Choice, Not Randomized, Multiple Answers  stop signs   Which colors might be found in a rainbow? (Note that the radio buttons now allow multiple buttons to be selected.)      Red    Red is a definitely one of the colors.      Yellow    Yes, yellow is correct.      Black    Remember the acronym ROY G BIV . B stands for blue.      Green    Yes, green is one of the colors.      Do you know the acronym ROY G BIV for the colors of a rainbow, and their order?   "
},
{
  "id": "exercise-231",
  "level": "2",
  "url": "interactive-projects.html#exercise-231",
  "type": "Checkpoint",
  "number": "5.16.1",
  "title": "True\/False and Explain.",
  "body": "True\/False and Explain  Structured with task, we can have an introduction, but this does not migrate with the interactive portions.  True\/False vector space  Every vector space has finite dimension.   The vector space of all polynomials with finite degree has a basis, , which is infinte.   , the vector space of polynomials with degree at most , has dimension by . [Cross-reference is just a demo, content is not relevant.] What happens if we relax the defintion and remove the parameter ?   Explain your reasoning in the previous question.  "
},
{
  "id": "exploration-2",
  "level": "2",
  "url": "interactive-projects.html#exploration-2",
  "type": "Exploration",
  "number": "5.16.2",
  "title": "Exploring Two-Deep.",
  "body": " Exploring Two-Deep  First Iterations of Each Multiple-Choice, Not Randomized, One Answer (First Copy) stop signs  What color is a stop sign?     Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?   Maybe go out for a drive?  Python ActiveCode (First Copy)  Run the following program and observe the information provided at each step.   for i in range(10): print(i)  We're still not really sure.  Second Iterations of Each Multiple-Choice, Not Randomized, One Answer (Second Copy) stop signs  What color is a stop sign?  We include a spurious Python <program> element in the <statement> which should never convert this from a multiple-choice question into a programming exercise (on any host), but should still get syntax highlighting as part of rendering the exercise.   sum = 0 sum += 6 for i in range(sum): print(\"Hello, World!\")      Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?   Maybe go out for a drive?  Python ActiveCode (Second Copy)  Run the following program and observe the information provided at each step.   for i in range(10): print(i)  We're still not really sure.  "
},
{
  "id": "section-23",
  "level": "1",
  "url": "section-23.html",
  "type": "Section",
  "number": "5.17",
  "title": "Expedited Samples",
  "body": " Expedited Samples  We hack in various interactive Runestone exercise types while PreTeXt markup evolves to cover more of Runestone's repertoire. In static output these will just produce a message. In HTML they may be interactive simply in a browser, or they may require being hosted on a Runestone server in order to perform.  CodeLens for a Python program:   CodeLens for a Java program. Supplied in source with trace data built beforehand on a Runestone server:   "
},
{
  "id": "exercise-232",
  "level": "2",
  "url": "section-23.html#exercise-232",
  "type": "Checkpoint",
  "number": "5.17.1",
  "title": "",
  "body": ""
},
{
  "id": "exercise-233",
  "level": "2",
  "url": "section-23.html#exercise-233",
  "type": "Checkpoint",
  "number": "5.17.2",
  "title": "",
  "body": ""
},
{
  "id": "reading-questions-1",
  "level": "1",
  "url": "reading-questions-1.html",
  "type": "Reading Questions",
  "number": "5.18",
  "title": "Reading Questions",
  "body": "  This is a simple question. Does this look like a short answer question?  Both questions in this reading-questions division should render in an interactive short answer form on a capable platform.   Shouldn't be hard!    And a second reading question, so we can test having more than one. Specifically to be certain each goes into the manifest properly. How about some math now, . Is that all right?   "
},
{
  "id": "simple-reading-question",
  "level": "2",
  "url": "reading-questions-1.html#simple-reading-question",
  "type": "Reading Question",
  "number": "5.18.1",
  "title": "",
  "body": " This is a simple question. Does this look like a short answer question?  Both questions in this reading-questions division should render in an interactive short answer form on a capable platform.   Shouldn't be hard!  "
},
{
  "id": "second-reading-question",
  "level": "2",
  "url": "reading-questions-1.html#second-reading-question",
  "type": "Reading Question",
  "number": "5.18.2",
  "title": "",
  "body": " And a second reading question, so we can test having more than one. Specifically to be certain each goes into the manifest properly. How about some math now, . Is that all right?  "
},
{
  "id": "atomic-video",
  "level": "1",
  "url": "atomic-video.html",
  "type": "Section",
  "number": "5.19",
  "title": "YouTube Video Embedding",
  "body": " YouTube Video Embedding  An <video> can be placed in five different ways:  all by itself, as a peer of <p> typically, with layout control,  inside a <figure> , earning a number and caption,  inside a <sidebyside> , with size and layout configured,  inside a <figure> inside a <sidebyside> , with size and layout configured, with a number and caption, and  inside a <figure> inside a <sidebyside> inside a <figure> , with size and layout configured, with a number and caption, but now sub-numbered ((a), (b), (c), ).  Examples of each, and more.  A YouTube video is embedded much differently when hosted on a Runestone server, so that an API is available to report reader (student) interactions. We are testing here the various possibilities.  All by itsef, with no layout specified, so showing the default size and placement. Vivamus in congue massa. Morbi condimentum ac magna at accumsan. Vestibulum ac augue eu lorem semper gravida.   Width set at 40%, so equal margins and thus centered. Aenean faucibus augue tellus, et sollicitudin tortor finibus non. Maecenas semper dolor quis diam placerat, iaculis sollicitudin augue finibus. Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non.   Asymmetric margins of 20% and 40% given, implying 40% width, equal to previous instance. Vivamus suscipit diam eget mi cursus viverra.   As a plain component of a <sidebyside> . Widths here are 20% and 30%, margins and gaps are automatic, default alignment on top edges. Nulla pharetra imperdiet elit, in sodales nibh blandit ultricies. Maecenas efficitur ac felis ut pharetra.      Inside a <figure> with no adjustments, so default behavior. Note how a <figure> occupies the entire width of the page, so then does the caption.   List Variables    Inside a <figure> with asymmetric (large) margins of 30% and 60%. Quisque finibus augue sit amet facilisis fringilla. Aenean faucibus augue tellus, et sollicitudin tortor finibus non.   List Variables    Inside figures inside a <sidebyside> . Same widths as previous <sidebyside> but alignment on bottoms of the panels, to partially align captions. Note how the captions are constrained in width by the width of the panels of the side-by-side.    List Variables     List Variables (Again)     Identical code to previous example, but now wrapped in an overall <figure> , which has its own caption and number, leaving the interior figures to be sub-numbered. Cross-references use the full number: .   Amalgamation of Videos    List Variables     List Variables  List Variables      "
},
{
  "id": "figure-16",
  "level": "2",
  "url": "atomic-video.html#figure-16",
  "type": "Figure",
  "number": "5.19.1",
  "title": "",
  "body": " List Variables   "
},
{
  "id": "figure-17",
  "level": "2",
  "url": "atomic-video.html#figure-17",
  "type": "Figure",
  "number": "5.19.2",
  "title": "",
  "body": " List Variables   "
},
{
  "id": "figure-18",
  "level": "2",
  "url": "atomic-video.html#figure-18",
  "type": "Figure",
  "number": "5.19.3",
  "title": "",
  "body": " List Variables   "
},
{
  "id": "figure-19",
  "level": "2",
  "url": "atomic-video.html#figure-19",
  "type": "Figure",
  "number": "5.19.4",
  "title": "",
  "body": " List Variables (Again)   "
},
{
  "id": "figure-20",
  "level": "2",
  "url": "atomic-video.html#figure-20",
  "type": "Figure",
  "number": "5.19.5",
  "title": "",
  "body": " Amalgamation of Videos    List Variables     List Variables  List Variables     "
},
{
  "id": "appendix-1",
  "level": "1",
  "url": "appendix-1.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation  The following table defines the notation used in this book. Page numbers or references refer to the first appearance of each symbol.   "
},
{
  "id": "solutions-1",
  "level": "1",
  "url": "solutions-1.html",
  "type": "Appendix",
  "number": "B",
  "title": "Hints and Answers to Selected Odd Exercises",
  "body": " Hints and Answers to Selected Odd Exercises  "
},
{
  "id": "solutions-2",
  "level": "1",
  "url": "solutions-2.html",
  "type": "Appendix",
  "number": "C",
  "title": "Hints and Answers to Selected Even Exercises",
  "body": " Hints and Answers to Selected Even Exercises  "
},
{
  "id": "solutions-3",
  "level": "1",
  "url": "solutions-3.html",
  "type": "Appendix",
  "number": "D",
  "title": "Hints and Answers to Selected Exercises",
  "body": " Hints and Answers to Selected Exercises  "
},
{
  "id": "section-25",
  "level": "1",
  "url": "section-25.html",
  "type": "Section",
  "number": "E.1",
  "title": "A Section in an Appendix",
  "body": " A Section in an Appendix  Inside a section.   A Subsection in a Section in an Appendix  Inside a subsection.   A Subsubsection in a Subsection in a Section in an Appendix  Nearly terminal.   Paragraphs in a Subsubsection in a Subsection in a Section in an Appendix  The paragraphs element can go in any division, but does not get a number.     "
},
{
  "id": "section-26",
  "level": "1",
  "url": "section-26.html",
  "type": "Section",
  "number": "E.2",
  "title": "Numbering in the Back Matter",
  "body": " Numbering in the Back Matter  Numbered blocks in an <appendix> in the <backmatter> of a <book> with <part> were once getting an extra level in HTML output. With standard defaults, the number of the following <example> should have two periods as separators, just like an example in the main matter when the part number is not included.   An Example Example  What's my number?   "
},
{
  "id": "example-53",
  "level": "2",
  "url": "section-26.html#example-53",
  "type": "Example",
  "number": "E.2.1",
  "title": "An Example Example.",
  "body": " An Example Example  What's my number?  "
},
{
  "id": "appendix-gfdl",
  "level": "1",
  "url": "appendix-gfdl.html",
  "type": "Appendix",
  "number": "F",
  "title": "GNU Free Documentation License",
  "body": " GNU Free Documentation License  Version 1.3, 3 November 2008  Copyright copyright 2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc. < >  Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.   0. PREAMBLE  The purpose of this License is to make a manual, textbook, or other functional and useful document free in the sense of freedom: to assure everyone the effective freedom to copy and redistribute it, with or without modifying it, either commercially or noncommercially. Secondarily, this License preserves for the author and publisher a way to get credit for their work, while not being considered responsible for modifications made by others.  This License is a kind of copyleft , which means that derivative works of the document must themselves be free in the same sense. It complements the GNU General Public License, which is a copyleft license designed for free software.  We have designed this License in order to use it for manuals for free software, because free software needs free documentation: a free program should come with manuals providing the same freedoms that the software does. But this License is not limited to software manuals; it can be used for any textual work, regardless of subject matter or whether it is published as a printed book. We recommend this License principally for works whose purpose is instruction or reference.    1. APPLICABILITY AND DEFINITIONS  This License applies to any manual or other work, in any medium, that contains a notice placed by the copyright holder saying it can be distributed under the terms of this License. Such a notice grants a world-wide, royalty-free license, unlimited in duration, to use that work under the conditions stated herein. The Document , below, refers to any such manual or work. Any member of the public is a licensee, and is addressed as you . You accept the license if you copy, modify or distribute the work in a way requiring permission under copyright law.  A Modified Version of the Document means any work containing the Document or a portion of it, either copied verbatim, or with modifications and\/or translated into another language.  A Secondary Section is a named appendix or a front-matter section of the Document that deals exclusively with the relationship of the publishers or authors of the Document to the Document's overall subject (or to related matters) and contains nothing that could fall directly within that overall subject. (Thus, if the Document is in part a textbook of mathematics, a Secondary Section may not explain any mathematics.) The relationship could be a matter of historical connection with the subject or with related matters, or of legal, commercial, philosophical, ethical or political position regarding them.  The Invariant Sections are certain Secondary Sections whose titles are designated, as being those of Invariant Sections, in the notice that says that the Document is released under this License. If a section does not fit the above definition of Secondary then it is not allowed to be designated as Invariant. The Document may contain zero Invariant Sections. If the Document does not identify any Invariant Sections then there are none.  The Cover Texts are certain short passages of text that are listed, as Front-Cover Texts or Back-Cover Texts, in the notice that says that the Document is released under this License. A Front-Cover Text may be at most 5 words, and a Back-Cover Text may be at most 25 words.  A Transparent copy of the Document means a machine-readable copy, represented in a format whose specification is available to the general public, that is suitable for revising the document straightforwardly with generic text editors or (for images composed of pixels) generic paint programs or (for drawings) some widely available drawing editor, and that is suitable for input to text formatters or for automatic translation to a variety of formats suitable for input to text formatters. A copy made in an otherwise Transparent file format whose markup, or absence of markup, has been arranged to thwart or discourage subsequent modification by readers is not Transparent. An image format is not Transparent if used for any substantial amount of text. A copy that is not Transparent is called Opaque .  Examples of suitable formats for Transparent copies include plain ASCII without markup, Texinfo input format, LaTeX input format, SGML or XML using a publicly available DTD, and standard-conforming simple HTML, PostScript or PDF designed for human modification. Examples of transparent image formats include PNG, XCF and JPG. Opaque formats include proprietary formats that can be read and edited only by proprietary word processors, SGML or XML for which the DTD and\/or processing tools are not generally available, and the machine-generated HTML, PostScript or PDF produced by some word processors for output purposes only.  The Title Page means, for a printed book, the title page itself, plus such following pages as are needed to hold, legibly, the material this License requires to appear in the title page. For works in formats which do not have any title page as such, Title Page means the text near the most prominent appearance of the work's title, preceding the beginning of the body of the text.  The publisher means any person or entity that distributes copies of the Document to the public.  A section Entitled XYZ means a named subunit of the Document whose title either is precisely XYZ or contains XYZ in parentheses following text that translates XYZ in another language. (Here XYZ stands for a specific section name mentioned below, such as Acknowledgements , Dedications , Endorsements , or History .) To Preserve the Title of such a section when you modify the Document means that it remains a section Entitled XYZ according to this definition.  The Document may include Warranty Disclaimers next to the notice which states that this License applies to the Document. These Warranty Disclaimers are considered to be included by reference in this License, but only as regards disclaiming warranties: any other implication that these Warranty Disclaimers may have is void and has no effect on the meaning of this License.    2. VERBATIM COPYING  You may copy and distribute the Document in any medium, either commercially or noncommercially, provided that this License, the copyright notices, and the license notice saying this License applies to the Document are reproduced in all copies, and that you add no other conditions whatsoever to those of this License. You may not use technical measures to obstruct or control the reading or further copying of the copies you make or distribute. However, you may accept compensation in exchange for copies. If you distribute a large enough number of copies you must also follow the conditions in section 3.  You may also lend copies, under the same conditions stated above, and you may publicly display copies.    3. COPYING IN QUANTITY  If you publish printed copies (or copies in media that commonly have printed covers) of the Document, numbering more than 100, and the Document's license notice requires Cover Texts, you must enclose the copies in covers that carry, clearly and legibly, all these Cover Texts: Front-Cover Texts on the front cover, and Back-Cover Texts on the back cover. Both covers must also clearly and legibly identify you as the publisher of these copies. The front cover must present the full title with all words of the title equally prominent and visible. You may add other material on the covers in addition. Copying with changes limited to the covers, as long as they preserve the title of the Document and satisfy these conditions, can be treated as verbatim copying in other respects.  If the required texts for either cover are too voluminous to fit legibly, you should put the first ones listed (as many as fit reasonably) on the actual cover, and continue the rest onto adjacent pages.  If you publish or distribute Opaque copies of the Document numbering more than 100, you must either include a machine-readable Transparent copy along with each Opaque copy, or state in or with each Opaque copy a computer-network location from which the general network-using public has access to download using public-standard network protocols a complete Transparent copy of the Document, free of added material. If you use the latter option, you must take reasonably prudent steps, when you begin distribution of Opaque copies in quantity, to ensure that this Transparent copy will remain thus accessible at the stated location until at least one year after the last time you distribute an Opaque copy (directly or through your agents or retailers) of that edition to the public.  It is requested, but not required, that you contact the authors of the Document well before redistributing any large number of copies, to give them a chance to provide you with an updated version of the Document.    4. MODIFICATIONS  You may copy and distribute a Modified Version of the Document under the conditions of sections 2 and 3 above, provided that you release the Modified Version under precisely this License, with the Modified Version filling the role of the Document, thus licensing distribution and modification of the Modified Version to whoever possesses a copy of it. In addition, you must do these things in the Modified Version:  Use in the Title Page (and on the covers, if any) a title distinct from that of the Document, and from those of previous versions (which should, if there were any, be listed in the History section of the Document). You may use the same title as a previous version if the original publisher of that version gives permission.  List on the Title Page, as authors, one or more persons or entities responsible for authorship of the modifications in the Modified Version, together with at least five of the principal authors of the Document (all of its principal authors, if it has fewer than five), unless they release you from this requirement.  State on the Title page the name of the publisher of the Modified Version, as the publisher.  Preserve all the copyright notices of the Document.  Add an appropriate copyright notice for your modifications adjacent to the other copyright notices.  Include, immediately after the copyright notices, a license notice giving the public permission to use the Modified Version under the terms of this License, in the form shown in the Addendum below.  Preserve in that license notice the full lists of Invariant Sections and required Cover Texts given in the Document's license notice.  Include an unaltered copy of this License.  Preserve the section Entitled History , Preserve its Title, and add to it an item stating at least the title, year, new authors, and publisher of the Modified Version as given on the Title Page. If there is no section Entitled History in the Document, create one stating the title, year, authors, and publisher of the Document as given on its Title Page, then add an item describing the Modified Version as stated in the previous sentence.  Preserve the network location, if any, given in the Document for public access to a Transparent copy of the Document, and likewise the network locations given in the Document for previous versions it was based on. These may be placed in the History section. You may omit a network location for a work that was published at least four years before the Document itself, or if the original publisher of the version it refers to gives permission.  For any section Entitled Acknowledgements or Dedications , Preserve the Title of the section, and preserve in the section all the substance and tone of each of the contributor acknowledgements and\/or dedications given therein.  Preserve all the Invariant Sections of the Document, unaltered in their text and in their titles. Section numbers or the equivalent are not considered part of the section titles.  Delete any section Entitled Endorsements . Such a section may not be included in the Modified Version.  Do not retitle any existing section to be Entitled Endorsements or to conflict in title with any Invariant Section.  Preserve any Warranty Disclaimers.   If the Modified Version includes new front-matter sections or appendices that qualify as Secondary Sections and contain no material copied from the Document, you may at your option designate some or all of these sections as invariant. To do this, add their titles to the list of Invariant Sections in the Modified Version's license notice. These titles must be distinct from any other section titles.  You may add a section Entitled Endorsements , provided it contains nothing but endorsements of your Modified Version by various parties for example, statements of peer review or that the text has been approved by an organization as the authoritative definition of a standard.  You may add a passage of up to five words as a Front-Cover Text, and a passage of up to 25 words as a Back-Cover Text, to the end of the list of Cover Texts in the Modified Version. Only one passage of Front-Cover Text and one of Back-Cover Text may be added by (or through arrangements made by) any one entity. If the Document already includes a cover text for the same cover, previously added by you or by arrangement made by the same entity you are acting on behalf of, you may not add another; but you may replace the old one, on explicit permission from the previous publisher that added the old one.  The author(s) and publisher(s) of the Document do not by this License give permission to use their names for publicity for or to assert or imply endorsement of any Modified Version.    5. COMBINING DOCUMENTS  You may combine the Document with other documents released under this License, under the terms defined in section 4 above for modified versions, provided that you include in the combination all of the Invariant Sections of all of the original documents, unmodified, and list them all as Invariant Sections of your combined work in its license notice, and that you preserve all their Warranty Disclaimers.  The combined work need only contain one copy of this License, and multiple identical Invariant Sections may be replaced with a single copy. If there are multiple Invariant Sections with the same name but different contents, make the title of each such section unique by adding at the end of it, in parentheses, the name of the original author or publisher of that section if known, or else a unique number. Make the same adjustment to the section titles in the list of Invariant Sections in the license notice of the combined work.  In the combination, you must combine any sections Entitled History in the various original documents, forming one section Entitled History ; likewise combine any sections Entitled Acknowledgements , and any sections Entitled Dedications . You must delete all sections Entitled Endorsements .    6. COLLECTIONS OF DOCUMENTS  You may make a collection consisting of the Document and other documents released under this License, and replace the individual copies of this License in the various documents with a single copy that is included in the collection, provided that you follow the rules of this License for verbatim copying of each of the documents in all other respects.  You may extract a single document from such a collection, and distribute it individually under this License, provided you insert a copy of this License into the extracted document, and follow this License in all other respects regarding verbatim copying of that document.    7. AGGREGATION WITH INDEPENDENT WORKS  A compilation of the Document or its derivatives with other separate and independent documents or works, in or on a volume of a storage or distribution medium, is called an aggregate if the copyright resulting from the compilation is not used to limit the legal rights of the compilation's users beyond what the individual works permit. When the Document is included in an aggregate, this License does not apply to the other works in the aggregate which are not themselves derivative works of the Document.  If the Cover Text requirement of section 3 is applicable to these copies of the Document, then if the Document is less than one half of the entire aggregate, the Document's Cover Texts may be placed on covers that bracket the Document within the aggregate, or the electronic equivalent of covers if the Document is in electronic form. Otherwise they must appear on printed covers that bracket the whole aggregate.    8. TRANSLATION  Translation is considered a kind of modification, so you may distribute translations of the Document under the terms of section 4. Replacing Invariant Sections with translations requires special permission from their copyright holders, but you may include translations of some or all Invariant Sections in addition to the original versions of these Invariant Sections. You may include a translation of this License, and all the license notices in the Document, and any Warranty Disclaimers, provided that you also include the original English version of this License and the original versions of those notices and disclaimers. In case of a disagreement between the translation and the original version of this License or a notice or disclaimer, the original version will prevail.  If a section in the Document is Entitled Acknowledgements , Dedications , or History , the requirement (section 4) to Preserve its Title (section 1) will typically require changing the actual title.    9. TERMINATION  You may not copy, modify, sublicense, or distribute the Document except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense, or distribute it is void, and will automatically terminate your rights under this License.  However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.  Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.  Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, receipt of a copy of some or all of the same material does not give you any rights to use it.    10. FUTURE REVISIONS OF THIS LICENSE  The Free Software Foundation may publish new, revised versions of the GNU Free Documentation License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns. See .  Each version of the License is given a distinguishing version number. If the Document specifies that a particular numbered version of this License or any later version applies to it, you have the option of following the terms and conditions either of that specified version or of any later version that has been published (not as a draft) by the Free Software Foundation. If the Document does not specify a version number of this License, you may choose any version ever published (not as a draft) by the Free Software Foundation. If the Document specifies that a proxy can decide which future versions of this License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Document.    11. RELICENSING  Massive Multiauthor Collaboration Site (or MMC Site ) means any World Wide Web server that publishes copyrightable works and also provides prominent facilities for anybody to edit those works. A public wiki that anybody can edit is an example of such a server. A Massive Multiauthor Collaboration (or MMC ) contained in the site means any set of copyrightable works thus published on the MMC site.  CC-BY-SA means the Creative Commons Attribution-Share Alike 3.0 license published by Creative Commons Corporation, a not-for-profit corporation with a principal place of business in San Francisco, California, as well as future copyleft versions of that license published by that same organization.  Incorporate means to publish or republish a Document, in whole or in part, as part of another Document.  An MMC is eligible for relicensing if it is licensed under this License, and if all works that were first published under this License somewhere other than this MMC, and subsequently incorporated in whole or in part into the MMC, (1) had no cover texts or invariant sections, and (2) were thus incorporated prior to November 1, 2008.  The operator of an MMC Site may republish an MMC contained in the site under CC-BY-SA on the same site at any time before August 1, 2009, provided the MMC is eligible for relicensing.    ADDENDUM: How to use this License for your documents  To use this License in a document you have written, include a copy of the License in the document and put the following copyright and license notices just after the title page:  Copyright (C) YEAR YOUR NAME. Permission is granted to copy, distribute and\/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. A copy of the license is included in the section entitled \"GNU Free Documentation License\".  If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts, replace the with Texts. line with this:  with the Invariant Sections being LIST THEIR TITLES, with the Front-Cover Texts being LIST, and with the Back-Cover Texts being LIST.  If you have Invariant Sections without Cover Texts, or some other combination of the three, merge those two alternatives to suit the situation.  If your document contains nontrivial examples of program code, we recommend releasing these examples in parallel under your choice of free software license, such as the GNU General Public License, to permit their use in free software.   "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "  "
},
{
  "id": "back-colophon",
  "level": "1",
  "url": "back-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in MathBook XML.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
