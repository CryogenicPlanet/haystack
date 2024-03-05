import tiktoken
enc = tiktoken.get_encoding("cl100k_base")

with open('compiled.txt', 'r') as file:
    text = file.read()
    encoded_text = enc.encode(text, allowed_special="all")
    token_count = len(encoded_text)
    print(f"Token count: {token_count}")
