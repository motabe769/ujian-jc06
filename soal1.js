
    var z=0;
    var plus=0;
    var minus=0;
    var hitung=[5,-6,-8,4,-3,6];

    for(i=0;i<hitung.length;i++)
    {
        if(hitung[i]<0)
        {
            var bulat=0;
            minus+=hitung[i];
            bulat=Math.abs(minus);
        }
        if(hitung[i]>0)
        {
            plus+=hitung[i]
        }
        ///z+=hitung[i];
    }
    console.log("total nilai positif : "+plus);
    console.log("total nilai negatif : "+bulat);
    console.log('hasil akhir:')

    if(plus>bulat)
    {
        console.log('---Positif Wins---');
    }
    if(plus<bulat)
    {
        console.log('---Negatif Wins---');
    }
    if(plus==bulat)
    {
        console.log('---DRAW---')
    }
