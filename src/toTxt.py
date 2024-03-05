import tiktoken
import fitz

import os

count = 7


def read_pdfs_and_compile_text():
    pdf_files = [f for f in os.listdir('dat') if f.endswith(
        '.pdf')][:count]  # Only first 10 PDFs
    with open('compiled.txt', 'w') as compiled_file:
        for pdf_file in pdf_files:
            pdf_path = os.path.join('dat', pdf_file)
            with fitz.open(pdf_path) as pdf:
                text = ""
                for page in pdf:
                    text += page.get_text()
                compiled_file.write(text + "\n<|endoftext|>\n")


if __name__ == '__main__':
    read_pdfs_and_compile_text()

enc = tiktoken.get_encoding("cl100k_base")

with open('compiled.txt', 'r') as file:
    text = file.read()
    encoded_text = enc.encode(text, allowed_special="all")
    token_count = len(encoded_text)
    print(f"Token count: {token_count}")
