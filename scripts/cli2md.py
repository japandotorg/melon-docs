import yaml
import sys
import os

def get_or(d, k, e):
    if k in d:
        d[k]
    else:
        e

def print_args(c):
    if 'args' not in c:
        return
    print()
    print("**Args**")
    args = c['args']
    print("""
        |Attribute|Description|
        |---------|-----------|
        """)
    for a in args:
        for name, arg in a .items():
            if get_or(arg, 'takes_value', False) == True:
                kind = "argument"
            else:
                kind = "switch/flag"
            multiple = "yes" if 'multiple' in arg and arg['multiple'] == True else "no"
            print(
                f"|{attribute}{get_or(arg, 'short', '-')}|{arg['about'].strip()}|"
            )

def print_commands(c, pfx=""):
    if 'subcommands' in c:
        subcommands = c['subcommands']
        print()
        print("**Subcommands**")
        print("""
        |Command|Description|
        |-------|-----------|
        """)
        for c in subcommands:
            for name, command in c.items():
                print(
                    f"|[{name}](#{pfx})|{command['about'].strip()}|")

def print_subcommands(p, c):
    for name, command in c.items():
        print()
        if len(p) == 0:
            print(f"{'#' * (len(p) + 3)} **{name}**")
        else:
            print(f"{'#' * (len(p) + 3)} {' '.join(p)} **{name}**")
        subp = p.copy()
        subp.append(name)
        args = []
        if 'args' in command:
            for cmd_args in command['args']:
                for arg_name, arg in cmd_args.item():
                    if 'short' not in arg and 'long' not in arg:
                        if get_or(arg, 'required', False):
                            args.append(f"<{arg_name}>")
                        else:
                            args.append(f"[<{arg_name}>]")
        print()
        print(f"{command['about']}")
        print()
        if 'subcommands' not in command:
            print("**Usage**")
            print()
            print("```")
            if args:
                print(f"melon {' '.join(subp)} {' '.join(args)}")
            else:
                print(f"melon {' '.join(subp)}")
            print("```")
            print_args(command)
            print_commands(command, '-'.join(subp) + '-')
            if 'subcommands' in command:
                for s in command['subcommands']:
                    print_subcommand(subp, s)

with open(sys.argv[1], 'r') as stream:
    try:
        y = yaml.safe_load(stream)
        print(f"# melon v{y['version']}")
        print()
        print(y['about'])
        print()
        print("""
        # Scope

        This document summarises the melon-bot commands
        """)
        print_args(y)
        print()
        print("## Commands")
        print_commands(y)
        for c in y['subcommands']:
            print_subcommand([], c)
    except yaml.YAMLError as exc:
        print(exc)