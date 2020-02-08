function loadSong() {
demoSong = `
beat 0.1171875
jmp lesson
jmp eyes
jmp fantasyland
jmp weall
jmp butthen
jmp andas
jmp eyes
jmp fadedlight
jmp fbiopenup
done
fbiopenup:
4 30 O
4 31 pen 
4 30 up 
4 31 yo
4 30 ur 
12 2a eyes
ret
lesson:
newscreen
2 no
2 25 It's 
2 25 time 
2 25 you 
4 23 learned 
2 21 a 
4 020 les
4 1a son<br>
10 no

2 no
2 1a It's 
2 1a time 
2 1a that 
2 25 you 
2 23 un
2 21 der
2 23 sta
8 25 and<br>
8 no

2 no
2 25 Don't 
2 25 e
2 25 ver 
4 23 count 
2 21 on 
2 20 a
2 20 ny
2 1a bo
2 1a dy 
6 18 else<br>
2 no
2 21 In 

2 21 this 
2 21 or 
2 21 a
2 23 ny 
2 20 o
4 020 ther 
10 1a land
8 no

newscreen
2 no
2 25 I 
4 25 once 
4 28 hoped 
2 26 for 
4 25 friend
6 23 ship,<br>
2 no
2 21 To 
2 21 find 
2 23 a 

6 25 place 
2 25 a
2 23 mong 
4 21 my 
10 25 kind<br>
8 no

2 no
2 25 But 
4 25 those 
4 23 were 
2 21 the 
4 020 child
4 1a ish 
4 18 wishes<br>
2 no
2 1a Of 

2 20 some
4 21 one 
4 020 who 
4 1a was 
10 1a blind.

 16 beats left in measure to be filled by openup

ret
eyes:
newscreen
2 23 O
2 25 pen 
2 23 up 
2 21 your 

10 2a eeee
9 30 yyyy
8 31 eees<br>
1 no
2 30 See 
2 30 the 

6 30 world 
2 2a from 
2 25 where 
4 2a I 
10 28 stand<br>
2 25 Me 
2 26 a
2 28 mong 
2 26 the 

4 25 migh
8 23 ty<br>
4 21 You 
4 23 caged 
4 25 at 
6 23 my 
2 21 co

2 23 m
6 25 mand
16 no
ret
fantasyland:
newscreen
2 23 O
2 25 pen 
2 23 up 
2 21 your 

10 2a eeee
9 30 yyyy
7 31 eees<br>
2 30 Give 
2 30 up 
2 30 your 

6 30 sweet 
2 2a fan
2 2a ta
4 2a sy 
12 28 land<br>
2 25 It's 
2 23 time 
2 25 to 

2 26 grow 
8 25 up 
3 28 and 
3 26 get 
8 25 wise<br>
4 no
3 21 Come 
3 23 now 
2 20 lit
2 1a tle 
8 020 one, 
4 no
4 020 o
4 21 pen 
4 020 up 
4 21 your 

16 1a eyes<br>
16 no

ret
fadedlight:
newscreen
2 23 O
2 25 pen 
2 23 up 
2 21 your 

10 2a eeee
9 30 yyyy
7 31 eees<br>
2 no
2 30 And 
2 30 be

6 30 hold 
2 2a the 
2 25 fa
4 2a ded 
12 28 light<br>
2 25 It's 
2 23 time 
2 25 to 

2 26 grow 
8 25 up 
3 28 and 
3 26 get 
8 25 wise<br>
4 no
3 21 Come 
3 23 now 
2 20 lit
2 1a tle 
8 020 one, 
4 no
4 020 o
4 21 pen 
4 020 up 
4 21 your 

16 1a eyes
16 no

ret


weall:
newscreen
4 no
4 24 We 
4 24 all 
4 23 start 
4 23 out 
4 28 the 
6 28 same<br>
2 28 With 

4 28 sim
4 24 ple 
4 23 na
8 24 ive 
12 21 trust<br>

4 no
2 24 Shiel
2 24 ded 
4 24 from 
4 23 the 
4 23 ma
4 21 ny 
6 1b ways<br>
2 1b That 

4 24 life's 
4 24 not 
6 23 fair 
4 24 or 
6 24 just
8 no
ret
butthen:
newscreen
2 no
2 28 But 
2 28 then 
2 28 there 
4 28 comes 
4 27 a 
4 27 mo
4 25 ment<br>
2 no
2 25 A 
2 25 sim
2 27 ple 

6 28 truth 
2 28 that 
2 28 you 
6 27 must 
8 30 face<br>
4 no
4 28 If 

4 2a you 
4 2a de
6 30 pend 
2 2a on 
2 2a o
6 28 thers<br>
4 no
4 23 You'll 

2 25 ne
6 25 ver 
6 25 find 
2 23 your 
16 27 place
ret

andas:
newscreen
2 no
2 28 And 
2 28 as 
2 28 you 
4 28 take 
4 27 that 
4 27 first 
4 25 step<br>
4 no
2 20 On 
2 23 a 

6 25 path 
2 25 that's 
4 25 all 
4 23 your 
8 23 own<br>
4 no
4 020 You 

4 21 see 
4 21 it 
6 23 all 
2 21 so 
2 20 cle
2 1a ar
4 18 ly<br>
4 no
4 020 The 

4 21 best 
4 21 way 
4 21 to 
4 020 sur
4 21 vive 
4 21 is 
6 21 all 
2 20 a

16 1a lone
8 no
 maybe get rid of 16 no?
ret
`;

/*

truth that you must face
turn your back on everything you know
translated from sheet music
Composed by Daniel Ingram
Arranged by Matías Peñaloza
arranged again by me I guess a teensy bit
quarter: 8
1 flag: 4
2 flag: 2
3 flag: 1
64 quarter notes per minute
128 1/8 / minute
256 1/16 / minute
512 1/32 / minute
0.1171875 = thirty-second note, three flags

It's time you learned a lesson
It's time that you understand
Don't ever count on anybody else
In this or any other land

I once hoped for friendship
To find a place among my kind
But those were the childish wishes
Of someone who was blind

Open up your eyes
See the world from were I stand
Me among the mighty
You caged at my command

Open up your eyes
Give up your sweet fantasyland
It's time to grow up and get wise
Come now little one
Open up your eyes

We all start out the same
With simple naïve trust
Shielded from the many ways
That life's not fair or just

But then there comes a moment
A simple truth that you must face
If you depend on others
You'll never find your place

And as you take that first step
Upon a path that's all your own
You see it all so clearly
The best way to survive is all alone

Open up your eyes
And see the world from where I stand
Me among the mighty
You caged at my command

Open up your eyes
And behold the fading light
It's time to grow up and get wise
Come now little one
Open up your eyes

Open up your eyes

*/
}