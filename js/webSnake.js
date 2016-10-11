var wide=40;
var high=20;
var head_x=wide/2,head_y=high/2;
var to=50;
var num=0;
var food_x=0;
var food_y=0;
var eaten=1;
var len=0;
var game_over=0;
var score=0;
var dif=40;
var first=1;
var first_f=1;

function create()
{
	for(var y=0;y<high;y++)
	{
		for(var x=0;x<wide;x++)
		{
			document.write("<span class=\"s\" id=\""+(x*100+y)+"\">*</span>");
		}
		document.write("<br/>");
	}
}

function start()
{
	main();
}

function main()
{
	head_x=wide/2;
	head_y=high/2;
	num=0;
	eaten=1;
	len=1;
	game_over=0;
	score=0;
	dif=40;
	first=1;
	tu=new Array;
	for (var x=0;x<wide;x++)
	{
		tu[x]=new Array;
		for (var y=0;y<high;y++)
		{
			tu[x][y]=0;
		}
	}
	
	num_at=new Array;
	for (var x=0;x<wide;x++)
	{
		num_at[x]=new Array;
		for (var y=0;y<high;y++)
		{
			num_at[x][y]=-1;
		}
	}
	
	
	map();
	setTimeout(xun_huan(),dif*10);
	sleep(2*1000);
	alert("游戏结束");
}

function xun_huan()
{
	cao_zuo();
	tu_xiang();
	if (game_over==0)
	{
		setTimeout(xun_huan(),dif*10);
	}
}

function tu_xiang()
//绘制图象的颜色
//颜色:0黑1红2绿3黄4蓝5紫6浅蓝7白
//可自定义其他方块
{
	for (var x=0;x<wide;x++)
	{
		for (var y=0;y<high;y++)
		{
			if (tu[x][y]==0)
			{
				document.getElementById(x*100+y).innerText =" ";
			}
			else if (tu[x][y]==1)
			{
				document.getElementById(x*100+y).innerText =" ";
			}
			else if (tu[x][y]==2)
			{
				document.getElementById(x*100+y).innerText =" ";
			}
			else if (tu[x][y]==3)
			{
				document.getElementById(x*100+y).innerText =" ";
			}
			else if (tu[x][y]==4)
			{
				document.getElementById(x*100+y).innerText =" ";
			}
			else if (tu[x][y]==5)
			{
				document.getElementById(x*100+y).innerText =" ";
			}
			else if (tu[x][y]==6)
			{
				document.getElementById(x*100+y).innerText =" ";
			}
			else if (tu[x][y]==7)
			{
				document.getElementById(x*100+y).innerText =" ";
			}
			else if (tu[x][y]==11)
			{
				document.getElementById(x*100+y).innerText ="#";
			}
			else if (tu[x][y]==21)
			{
				document.getElementById(x*100+y).innerText ="@";
			}
			else if (tu[x][y]==31)
			{
				document.getElementById(x*100+y).innerText ="*";
			}
			else if (tu[x][y]==41)
			{
				document.getElementById(x*100+y).innerText ="0";
			}
			else if (tu[x][y]==51)
			{
				document.getElementById(x*100+y).innerText ="o";
			}
		}
	}
}

function cao_zuo()
{
	
}

function map()
{
	for (var x=0;x<wide;x++)
	{
		for (var y=0;y<high;y++)
		{
			tu[x][y]=6;
			tu[x][0]=11;
			tu[x][high-1]=11;
			tu[0][y]=11;
			tu[wide-1][y]=11;
		}
	}
}

//设置延时函数
function sleep(n)
{
    var  start=new Date().getTime();
    while(true) if(new Date().getTime()-start>n)  break;
}

/*//zy™科技荣耀出品

#include<stdio.h>
#include<conio.h>

#define wide 40//宏定义宽
#define high 20//宏定义高

int tu[wide][high];//绘制界面的二维数组
int num_at[wide][high];

int head_x=wide/2,head_y=high/2;
int to=50;
int num=0;
int food_x,food_y;
int eaten=1;
int len=0;
int game_over=0;
int score=0;
int dif=40;
int first=1;
int first_f=1;

void tu_xiang();
void cao_zuo();
void map();
void direction();
void head();
void number_head();
void food();
void body();
void gameover();

int main()
{
	printf("\33[25?l");
	open:
	head_x=wide/2,head_y=high/2;
	num=0;
	eaten=1;
	len=1;
	game_over=0;
	score=0;
	dif=40;
	first=1;
	for (int x=0;x<wide;x++)
	{
		for (int y=0;y<high;y++)
		{
			num_at[x][y]=-1;
		}
	}
	
	map();
	do
	{
		cao_zuo();
		tu_xiang();
		if (first)
		{
			first=0;
			gotoxy(wide/2-5,high/4*3);
			printf("按任意键开始\n");
			if (first_f)
			{
				first_f=0;
				gotoxy(wide/2-10,high/4);
				printf("将输入法切换到数字键盘\n");
				gotoxy(wide/2,high/4+3);
				printf("2 \n");
				gotoxy(wide/2,high/4+4);
				printf("上\n");
				gotoxy(wide/2,high/4+6);
				printf("下\n");
				gotoxy(wide/2,high/4+7);
				printf("8 \n");
				gotoxy(wide/2-2,high/4+5);
				printf("左\n");
				gotoxy(wide/2-4,high/4+5);
				printf("4 \n");
				gotoxy(wide/2+2,high/4+5);
				printf("右\n");
				gotoxy(wide/2+4,high/4+5);
				printf("6 \n");
				gotoxy(wide/2-6,high/4*3+2);
				printf("zy™科技荣耀出品\n");
			}
			to=getch();
			if (to!=50&&to!=52&&to!=54&&to!=56)
			{
				to=50;
			}
		}
		gotoxy(wide/2-6,high+1);
		printf("当前得分：%d\n",score);
		if (game_over)
		{
			break;
		}
		usleep(1000*dif*10);
		clrscr();//清屏
	}
	while (1);
	usleep(2*1000*1000);
	clrscr();
	gotoxy(wide/2-4,high/2-2);
	printf("游戏结束\n");
	gotoxy(wide/2-6,high/2);
	printf("你的得分：%d\n",score);
	for (int a=3;a>0;a--)
	{
		gotoxy(wide/2-8,high/2+2);
		printf("(%d)秒后重新开始\n",a);
		sleep(1);
	}
	clrscr();
	goto open;
	return 0;
}

void tu_xiang()
//绘制图象的颜色
//颜色:0黑1红2绿3黄4蓝5紫6浅蓝7白
//可自定义其他方块
{
	int x,y,ji_shu=0;
	for (y=0;y<high;y++)
	{
		for (x=0;x<wide;x++)
		{
			if (tu[x][y]==0)
			{
				printf("\033[40;30md");
			}
			else if (tu[x][y]==1)
			{
				printf("\033[41;31md");
			}
			else if (tu[x][y]==2)
			{
				printf("\033[42;32md");
			}
			else if (tu[x][y]==3)
			{
				printf("\033[43;33md");
			}
			else if (tu[x][y]==4)
			{
				printf("\033[44;34md");
			}
			else if (tu[x][y]==5)
			{
				printf("\033[45;35md");
			}
			else if (tu[x][y]==6)
			{
				printf("\033[46;36md");
			}
			else if (tu[x][y]==7)
			{
				printf("\033[47;37md");
			}
			else if (tu[x][y]==11)
			{
				printf("\033[43;31m#");
			}
			else if (tu[x][y]==21)
			{
				printf("\033[46;35m@");
			}
			else if (tu[x][y]==31)
			{
				printf("\033[46;34m*");
			}
			else if (tu[x][y]==41)
			{
				printf("\033[46;35m0");
			}
			else if (tu[x][y]==51)
			{
				printf("\033[46;35mo");
			}
			ji_shu++;
			if (ji_shu==wide)
			{
				printf("\n");
				ji_shu=0;
			}
		}
	}
}

void cao_zuo()
//左列右行
//在这里写入操作程序
//p.s.:不可以定义名为x,y,wide,high的变量
{
	
	direction();
	head();
	number_head();
	food();
	body();
}

void map()
{
	for (int x=0;x<wide;x++)
	{
		for (int y=0;y<high;y++)
		{
			tu[x][y]=6;
			tu[x][0]=11;
			tu[x][high-1]=11;
			tu[0][y]=11;
			tu[wide-1][y]=11;
		}
	}
}

void direction()
{
	int to_last=to;
	if (kbhit())
	{
		to=getch();
		if (to!=50&&to!=52&&to!=54&&to!=56)
		{
			to=to_last;
		}
	}
	if (to==50)
	{
		if (to_last==56)
		{
			to=to_last;
		}
	}
	if (to==52)
	{
		if (to_last==54)
		{
			to=to_last;
		}
	}
	if (to==54)
	{
		if (to_last==52)
		{
			to=to_last;
		}
	}
	if (to==56)
	{
		if (to_last==50)
		{
			to=to_last;
		}
	}
}

void head()
{
	tu[head_x][head_y]=6;
	if (to==50)
	{
		head_y--;
	}
	if (to==52)
	{
		head_x--;
	}
	if (to==54)
	{
		head_x++;
	}
	if (to==56)
	{
		head_y++;
	}
	gameover();
	tu[head_x][head_y]=21;
	num++;
}

void number_head()
{
	num_at[head_x][head_y]=num;
}

void food()
{
	if (head_x==food_x&&head_y==food_y)
	{
		eaten=1;
		len++;
		score++;
		if (dif>15)
		{
			dif--;
		}
	}
	if (eaten)
	{
		srand(time(0));
		result:
		food_x=rand()%(wide-2)+1;
		food_y=rand()%(high-2)+1;
		if (tu[food_x][food_y]!=6)
		{
			goto result;
		}
	}
	tu[food_x][food_y]=31;
	eaten=0;
}

void body()
{
	for (int x=0;x<wide;x++)
	{
		for (int y=0;y<high;y++)
		{
			if (tu[x][y]==41||tu[x][y]==51)
			{
				tu[x][y]=6;
			}
		}
	}
	int stop=num_at[head_x][head_y];
	int final=stop-len;
	for (int x=0;x<wide;x++)
	{
		for (int y=0;y<high;y++)
		{
			if (num_at[x][y]>final&&num_at[x][y]<stop)
			{
				tu[x][y]=41;
			}
			if (num_at[x][y]==final)
			{
				tu[x][y]=51;
			}
		}
	}
}

void gameover()
{
	if (tu[head_x][head_y]==11||tu[head_x][head_y]==41)
	{
		game_over=1;
	}
}*/
