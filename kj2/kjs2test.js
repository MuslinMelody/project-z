function loadSong() {
demoSong = `
max 24
min 20
beat .12
newscreen
jmp lvl2
jmp lvl2
jmp lvl2
jmp lvl2

done

lvl2:
jmp lvl1
jmp lvl1
jmp lvl1
jmp lvl1
ret

lvl1:
jmp abcd
jmp abcd
jmp abcd
jmp abcd
ret

abcd:
jmp a
jmp b
jmp c
jmp d
ret

a:
1 20 aaaa
ret

b:
1 21 bbbb
ret

c:
1 23 cccc
ret

d:
1 24 dddd
ret
`;
}



//    /vjʊ/