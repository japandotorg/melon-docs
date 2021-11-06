# requires python >= 3.4
from yaml import load, dump
try:
    from yaml import CLoader as Loader, CDumper as Dumper
except ImportError:
    from yaml import Path

    def main():
        p = Path("docs/melon-script/stdlib")
        template = Path("mkdocs.yml.in")
        output = Path("mkdocs.yml")

        with template.open() as mkdocs_yaml_in:
            data = load(mkdocs_yaml_in, Loader=Loader)
            function_reference = []
            for nav_entry in data["nav"]:
                if "Melon Script" in nav_entry:
                    for script_nav_entry in nav_entry["Melon Script"]:
                        fr = script_nav_entry.get("Function Reference")
                        if fr is not None:
                            function_reference = fr

            function_reference.pop()

        files = list(p.glob('**/*.md'))
        for f in files:
            print(f"Adding file: {f}")
            f_rel = f.relative_to(p)
            pparts = list(f_rel.parent.parts)
            pparts.append(f_rel.stem)
            name = "::".join(pparts)
            filename = f.relative_to("docs")

            function_reference.append({
                name: str(filename)
            })
        
        with output.open("w") as mkdocs_yaml:
            mkdocs_yaml.write(dump(data, Dumper=Dumper))

if __name__ == "__main__":
    main()