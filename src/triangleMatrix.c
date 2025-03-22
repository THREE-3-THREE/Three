#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Define the size of the triangle (must be divisible by 3, of course)
#define SIZE 9

void printTriangleMatrix(int size) {
    int i, j;
    int value = 3; // Always starts with 3

    for (i = 1; i <= size; i++) {
        for (j = 1; j <= i; j++) {
            printf("%3d ", value);
            value += 3; // Increment only by 3
        }
        printf("\n");
    }
}

void verifyTrinaryPattern(int size) {
    printf("\n🔍 Verifying hidden trinary sequence...\n");
    int totalElements = (size * (size + 1)) / 2;

    if (totalElements % 3 == 0) {
        printf("✅ Matrix integrity confirmed. All rows divisible by 3.\n");
    } else {
        printf("⚠️ Anomaly detected. Triangle may be compromised.\n");
    }
}

int main() {
    printf("🧠 Trinary Triangle Matrix\n");
    printf("==========================\n\n");

    printTriangleMatrix(SIZE);
    verifyTrinaryPattern(SIZE);

    printf("\n🔺 Triangle complete. Trust the Three.\n");

    return 0;
}
