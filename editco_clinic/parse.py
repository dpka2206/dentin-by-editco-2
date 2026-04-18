import re
html = open("/home/deepika/editco-medical/editco_clinic/public/assets/index.html").read()
for match in re.finditer(r"<img[^>]+src=[\"']([^\"']+)[\"'][^>]*>", html):
    m = match.group(0)
    alt = re.search(r"alt=[\"']([^\"']*)[\"']", m)
    alt_text = alt.group(1) if alt else "No Alt"
    src_text = match.group(1)
    if not src_text.endswith(".svg"):
        print(f"{src_text} -> {alt_text}")
