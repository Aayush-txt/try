#include <stdio.h>
#include <conio.h>

float balance = 0; 
static float interestRate = 5;

void welcome();  
void deposit(float amount);  
float interestEarned();  
float withdraw(float amount);  

void main()
{
    int choice;
    float amount;
    welcome();
}

void welcome()
{
    printf("*********************************");
    printf("    Welcome to The Git Bank      ");
    printf("*********************************");
    printf("current balance = %.2f\n", balance);
    printf("*********************************");
}
void deposit (float amount)
{
    balance += amount;
