def detect_threes(text):
    lines = text.split('\n')
    for i, line in enumerate(lines):
        if line.count('3') >= 3 or line.lower().count('three') >= 3:
            print(f"Suspicious line {i+1}: {line}")

sample = '''
In 1933, the third president of a major banking institution met with 3 officials.
Three new protocols were signed on March 3rd.
'''
detect_threes(sample)